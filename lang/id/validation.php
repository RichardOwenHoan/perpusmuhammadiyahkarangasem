<?php

return [
    'required' => 'Field :attribute wajib diisi.',
    'email' => 'Field :attribute harus berupa alamat email yang valid.',
    'unique' => ':attribute sudah digunakan.',
    'confirmed' => 'Konfirmasi :attribute tidak cocok.',
    'current_password' => 'Password tidak benar.',
    'date' => 'Field :attribute bukan tanggal yang valid.',
    'after' => 'Field :attribute harus berupa tanggal setelah :date.',
    'after_or_equal' => 'Field :attribute harus berupa tanggal setelah atau sama dengan :date.',
    'before' => 'Field :attribute harus berupa tanggal sebelum :date.',
    'before_or_equal' => 'Field :attribute harus berupa tanggal sebelum atau sama dengan :date.',
    'digits' => 'Field :attribute harus berupa :digits digit.',
    'digits_between' => 'Field :attribute harus berupa antara :min dan :max digit.',
    'integer' => 'Field :attribute harus berupa bilangan bulat.',
    'numeric' => 'Field :attribute harus berupa angka.',
    'string' => 'Field :attribute harus berupa string.',
    'image' => 'Field :attribute harus berupa gambar.',
    'mimes' => 'Field :attribute harus berupa file dengan tipe: :values.',
    'array' => 'Field :attribute harus berupa array.',
    'in' => ':attribute yang dipilih tidak valid.',
    'exists' => ':attribute yang dipilih tidak valid.',

    'min' => [
        'array' => 'Field :attribute harus memiliki setidaknya :min item.',
        'file' => 'Field :attribute harus setidaknya :min kilobyte.',
        'numeric' => 'Field :attribute harus setidaknya :min.',
        'string' => 'Field :attribute harus setidaknya :min karakter.',
    ],

    'max' => [
        'array' => 'Field :attribute tidak boleh memiliki lebih dari :max item.',
        'file' => 'Field :attribute tidak boleh lebih besar dari :max kilobyte.',
        'numeric' => 'Field :attribute tidak boleh lebih besar dari :max.',
        'string' => 'Field :attribute tidak boleh lebih dari :max karakter.',
    ],

    'between' => [
        'array' => 'Field :attribute harus memiliki antara :min dan :max item.',
        'file' => 'Field :attribute harus berukuran antara :min dan :max kilobyte.',
        'numeric' => 'Field :attribute harus bernilai antara :min dan :max.',
        'string' => 'Field :attribute harus berisi antara :min dan :max karakter.',
    ],

    'password' => [
        'letters' => 'Field :attribute harus mengandung setidaknya satu huruf.',
        'mixed' => 'Field :attribute harus mengandung setidaknya satu huruf besar dan satu huruf kecil.',
        'numbers' => 'Field :attribute harus mengandung setidaknya satu angka.',
        'symbols' => 'Field :attribute harus mengandung setidaknya satu simbol.',
        'uncompromised' => ':attribute yang diberikan telah muncul dalam kebocoran data. Silakan pilih :attribute yang berbeda.',
    ],

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    'attributes' => [
        'name' => 'nama',
        'email' => 'email',
        'password' => 'password',
        'password_confirmation' => 'konfirmasi password',
        'current_password' => 'password saat ini',
        'judul' => 'judul',
        'kode_buku' => 'kode buku',
        'pengarang' => 'pengarang',
        'penerbit' => 'penerbit',
        'tahun_terbit' => 'tahun terbit',
        'stok' => 'stok',
        'intisari' => 'intisari',
        'kondisi' => 'kondisi',
        'category_ids' => 'kategori',
        'gambar' => 'gambar',
        'role' => 'peran',
        'nis' => 'NIS',
        'kelas' => 'kelas',
        'loan_date' => 'tanggal pinjam',
        'return_date' => 'tanggal kembali',
        'extension_days' => 'hari perpanjangan',
        'token' => 'token',
    ],
];