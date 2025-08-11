<?php

namespace App\Exports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\AfterSheet;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Style\Border;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Style\Font;

class LoanExport implements FromArray, WithStyles, WithTitle, WithEvents
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

    public function array(): array
    {
        // Create the complete array structure including headers and data
        $data = [];
        
        // Add empty rows for headers (will be filled in AfterSheet event)
        for ($i = 0; $i < 11; $i++) {
            $data[] = ['', '', '', '', '', '', ''];
        }
        
        // Add table headers
        $data[] = ['No', 'Judul Buku', 'Nama Peminjam', 'Tanggal Pinjam', 'Tanggal Dikembalikan', 'Status Peminjaman', 'Denda'];
        
        // Add data rows
        foreach ($this->loans as $index => $loan) {
            $data[] = [
                $index + 1,
                $loan->book->judul ?? '-',
                $loan->user->name ?? '-',
                $loan->loan_date ? \Carbon\Carbon::parse($loan->loan_date)->format('d/m/Y') : '-',
                $loan->actual_return_date ? \Carbon\Carbon::parse($loan->actual_return_date)->format('d/m/Y') : '-',
                $loan->status_peminjaman ?? '-',
                'Rp ' . number_format($loan->denda, 0, ',', '.')
            ];
        }
        
        return $data;
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

                // Summary Statistics
                $totalBorrowed = $this->loans->count();
                $totalReturned = $this->loans->where('status_peminjaman', 'dikembalikan')->count();

                $sheet->mergeCells('A9:C9');
                $sheet->getCell('A9')->setValue('Buku Yang Dipinjam:');
                $sheet->getStyle('A9')->applyFromArray([
                    'font' => ['bold' => true],
                    'alignment' => ['horizontal' => Alignment::HORIZONTAL_LEFT]
                ]);

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

                $sheet->getCell('G9')->setValue($totalReturned);
                $sheet->getStyle('G9')->applyFromArray([
                    'font' => ['bold' => true],
                    'alignment' => ['horizontal' => Alignment::HORIZONTAL_CENTER],
                    'borders' => ['allBorders' => ['borderStyle' => Border::BORDER_THIN]]
                ]);

                // Style table headers (row 12)
                $sheet->getStyle('A12:G12')->applyFromArray([
                    'font' => ['bold' => true],
                    'alignment' => ['horizontal' => Alignment::HORIZONTAL_CENTER, 'vertical' => Alignment::VERTICAL_CENTER],
                    'borders' => ['allBorders' => ['borderStyle' => Border::BORDER_THIN]],
                    'fill' => [
                        'fillType' => Fill::FILL_SOLID,
                        'startColor' => ['rgb' => 'E6E6E6']
                    ]
                ]);

                // Style data rows (starting from row 13)
                $dataStartRow = 13;
                $totalDataRows = count($this->loans);
                $lastDataRow = $dataStartRow + $totalDataRows - 1;

                if ($totalDataRows > 0) {
                    // Apply borders to all data cells
                    $sheet->getStyle('A' . $dataStartRow . ':G' . $lastDataRow)->applyFromArray([
                        'borders' => ['allBorders' => ['borderStyle' => Border::BORDER_THIN]],
                        'alignment' => ['vertical' => Alignment::VERTICAL_CENTER]
                    ]);

                    // Center align specific columns (No, dates, status, denda)
                    $sheet->getStyle('A' . $dataStartRow . ':A' . $lastDataRow)->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
                    $sheet->getStyle('D' . $dataStartRow . ':G' . $lastDataRow)->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
                }

                // Set row height for header
                $sheet->getRowDimension('12')->setRowHeight(25);
            }
        ];
    }
}
