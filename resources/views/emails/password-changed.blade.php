<!DOCTYPE html>
<html>
<head>
    <title>Password Berhasil Diubah</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: #f9f9f9;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #3490dc;
            margin-top: 0;
        }
        .alert {
            background-color: #d4edda;
            border: 1px solid #c3e6cb;
            color: #155724;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
        }
        .info-box {
            background-color: #e7f3ff;
            border: 1px solid #b8daff;
            color: #004085;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
        }
        .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            font-size: 12px;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Password Berhasil Diubah</h1>

        <p>Halo {{ $user->name }},</p>

        <div class="alert">
            <strong>Password Anda telah berhasil diubah!</strong>
        </div>

        <p>Kami ingin memberitahukan bahwa password akun Anda di sistem Perpustakaan Muhammadiyah Karangasem telah berhasil diubah pada:</p>

        <div class="info-box">
            <strong>Waktu:</strong> {{ now()->format('d F Y, H:i:s') }} WIB<br>
            <strong>Email:</strong> {{ $user->email }}
        </div>

        <p>Jika Anda tidak melakukan perubahan password ini, segera hubungi administrator sistem untuk mengamankan akun Anda.</p>

        <p><strong>Tips Keamanan:</strong></p>
        <ul>
            <li>Jangan bagikan password Anda kepada siapapun</li>
            <li>Gunakan password yang kuat dan unik</li>
            <li>Logout dari semua perangkat jika diperlukan</li>
        </ul>

        <p>Terima kasih telah menjaga keamanan akun Anda.</p>

        <p>Salam,<br>
        <strong>Tim Perpustakaan Muhammadiyah Karangasem</strong></p>

        <div class="footer">
            <p>Email ini dikirim secara otomatis, mohon tidak membalas email ini.</p>
            <p>© {{ date('Y') }} Perpustakaan Muhammadiyah Karangasem. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
