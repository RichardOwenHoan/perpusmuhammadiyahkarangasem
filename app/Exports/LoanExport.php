<?php

namespace App\Exports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\AfterSheet;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Style\Border;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Style\Font;

class LoanExport implements FromCollection, WithMapping, WithStyles, WithTitle, WithEvents
{
    protected $from;
    protected $to;
    protected $loans;

    public function __construct($from, $to)
    {
        $this->from = $from;
        $this->to = $to;
        $this->loans = \App\Models\BookLoan::with(['user', 'book'])
            ->whereBetween('loan_date', [$this->from, $this->to])
            ->orderBy('loan_date', 'desc')
            ->get();
    }

    public function collection()
    {
        return $this->loans;
    }

    public function map($loan): array
    {
        static $counter = 1;
        return [
            $counter++,
            $loan->book->judul ?? '-',
            $loan->user->name ?? '-',
            $loan->loan_date ? \Carbon\Carbon::parse($loan->loan_date)->format('d/m/Y') : '-',
            $loan->actual_return_date ? \Carbon\Carbon::parse($loan->actual_return_date)->format('d/m/Y') : '-',
            $loan->status_peminjaman ?? '-',
            'Rp ' . number_format($loan->denda, 0, ',', '.'),
        ];
    }

    public function title(): string
    {
        return 'Laporan Peminjaman';
    }

    public function styles(Worksheet $sheet)
    {
        return [];
    }

    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function(AfterSheet $event) {
                $sheet = $event->sheet->getDelegate();

                // Set column widths
                $sheet->getColumnDimension('A')->setWidth(5);
                $sheet->getColumnDimension('B')->setWidth(25);
                $sheet->getColumnDimension('C')->setWidth(20);
                $sheet->getColumnDimension('D')->setWidth(15);
                $sheet->getColumnDimension('E')->setWidth(15);
                $sheet->getColumnDimension('F')->setWidth(18);
                $sheet->getColumnDimension('G')->setWidth(15);

                // Clear existing content
                $sheet->getCell('A1')->setValue('');

                // Header - School Name
                $sheet->mergeCells('A1:G1');
                $sheet->getCell('A1')->setValue('SMP MUHAMMADIYAH Karangasem');
                $sheet->getStyle('A1')->applyFromArray([
                    'font' => ['bold' => true, 'size' => 14],
                    'alignment' => ['horizontal' => Alignment::HORIZONTAL_CENTER]
                ]);

                // Header - Perpustakaan Sekolah
                $sheet->mergeCells('A2:G2');
                $sheet->getCell('A2')->setValue('Perpustakaan Sekolah');
                $sheet->getStyle('A2')->applyFromArray([
                    'font' => ['bold' => true, 'size' => 12],
                    'alignment' => ['horizontal' => Alignment::HORIZONTAL_CENTER]
                ]);

                // Header - Address
                $sheet->mergeCells('A3:G3');
                $sheet->getCell('A3')->setValue('Jl. Raya Karang Asem, Kec. Karang Asem, Bali');
                $sheet->getStyle('A3')->applyFromArray([
                    'font' => ['size' => 10],
                    'alignment' => ['horizontal' => Alignment::HORIZONTAL_CENTER]
                ]);

                // Header - Contact
                $sheet->mergeCells('A4:G4');
                $sheet->getCell('A4')->setValue('Telp : (0361) 123456 | Email : perpus@smpmuhkarangasem.sch.id');
                $sheet->getStyle('A4')->applyFromArray([
                    'font' => ['size' => 10],
                    'alignment' => ['horizontal' => Alignment::HORIZONTAL_CENTER]
                ]);

                // Empty row
                $sheet->getCell('A5')->setValue('');

                // Report Title
                $sheet->mergeCells('A6:G6');
                $sheet->getCell('A6')->setValue('LAPORAN DAFTAR PEMINJAMAN BUKU');
                $sheet->getStyle('A6')->applyFromArray([
                    'font' => ['bold' => true, 'size' => 12],
                    'alignment' => ['horizontal' => Alignment::HORIZONTAL_CENTER]
                ]);

                // Period
                $sheet->mergeCells('A7:G7');
                $fromFormatted = \Carbon\Carbon::parse($this->from)->format('d/m/Y');
                $toFormatted = \Carbon\Carbon::parse($this->to)->format('d/m/Y');
                $sheet->getCell('A7')->setValue('Periode : ' . $fromFormatted . ' - ' . $toFormatted);
                $sheet->getStyle('A7')->applyFromArray([
                    'font' => ['size' => 10],
                    'alignment' => ['horizontal' => Alignment::HORIZONTAL_CENTER]
                ]);

                // Empty row
                $sheet->getCell('A8')->setValue('');

                // Summary Statistics
                $totalBorrowed = $this->loans->count();
                $totalReturned = $this->loans->where('status_peminjaman', 'dikembalikan')->count();

                $sheet->mergeCells('A9:C9');
                $sheet->getCell('A9')->setValue('Buku Yang Dipinjam:');
                $sheet->getStyle('A9')->applyFromArray([
                    'font' => ['bold' => true],
                    'alignment' => ['horizontal' => Alignment::HORIZONTAL_LEFT]
                ]);

                $sheet->mergeCells('D9:D9');
                $sheet->getCell('D9')->setValue($totalBorrowed);
                $sheet->getStyle('D9')->applyFromArray([
                    'font' => ['bold' => true],
                    'alignment' => ['horizontal' => Alignment::HORIZONTAL_CENTER],
                    'borders' => ['allBorders' => ['borderStyle' => Border::BORDER_THIN]]
                ]);

                $sheet->mergeCells('E9:F9');
                $sheet->getCell('E9')->setValue('Buku Yang dikembalikan :');
                $sheet->getStyle('E9')->applyFromArray([
                    'font' => ['bold' => true],
                    'alignment' => ['horizontal' => Alignment::HORIZONTAL_LEFT]
                ]);

                $sheet->mergeCells('G9:G9');
                $sheet->getCell('G9')->setValue($totalReturned);
                $sheet->getStyle('G9')->applyFromArray([
                    'font' => ['bold' => true],
                    'alignment' => ['horizontal' => Alignment::HORIZONTAL_CENTER],
                    'borders' => ['allBorders' => ['borderStyle' => Border::BORDER_THIN]]
                ]);

                // Empty row
                $sheet->getCell('A10')->setValue('');

                // Table Headers
                $headers = ['No', 'Judul Buku', 'Nama Peminjam', 'Tanggal Pinjam', 'Tanggal Dikembalikan', 'Status Peminjaman', 'Denda'];
                $row = 11;

                foreach ($headers as $col => $header) {
                    $cell = chr(65 + $col) . $row;
                    $sheet->getCell($cell)->setValue($header);
                    $sheet->getStyle($cell)->applyFromArray([
                        'font' => ['bold' => true],
                        'alignment' => ['horizontal' => Alignment::HORIZONTAL_CENTER, 'vertical' => Alignment::VERTICAL_CENTER],
                        'borders' => ['allBorders' => ['borderStyle' => Border::BORDER_THIN]],
                        'fill' => [
                            'fillType' => Fill::FILL_SOLID,
                            'startColor' => ['rgb' => 'E6E6E6']
                        ]
                    ]);
                }

                // Data rows
                $dataStartRow = 12;
                foreach ($this->loans as $index => $loan) {
                    $row = $dataStartRow + $index;
                    $data = [
                        $index + 1,
                        $loan->book->judul ?? '-',
                        $loan->user->name ?? '-',
                        $loan->loan_date ? \Carbon\Carbon::parse($loan->loan_date)->format('d/m/Y') : '-',
                        $loan->actual_return_date ? \Carbon\Carbon::parse($loan->actual_return_date)->format('d/m/Y') : '-',
                        $loan->status_peminjaman ?? '-',
                        'Rp ' . number_format($loan->denda, 0, ',', '.')
                    ];

                    foreach ($data as $col => $value) {
                        $cell = chr(65 + $col) . $row;
                        $sheet->getCell($cell)->setValue($value);
                        $sheet->getStyle($cell)->applyFromArray([
                            'borders' => ['allBorders' => ['borderStyle' => Border::BORDER_THIN]],
                            'alignment' => [
                                'horizontal' => $col == 0 ? Alignment::HORIZONTAL_CENTER :
                                              ($col >= 3 && $col <= 6 ? Alignment::HORIZONTAL_CENTER : Alignment::HORIZONTAL_LEFT),
                                'vertical' => Alignment::VERTICAL_CENTER
                            ]
                        ]);
                    }
                }

                // Set row height for header
                $sheet->getRowDimension('11')->setRowHeight(25);
            }
        ];
    }
}
