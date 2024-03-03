import '@/app/ui/global.css';
import {
    inter, lusitana
} from '@/app/ui/fonts';

export default function RootLayout({
    children,
}: {
  // eslint-disable-next-line no-undef
  children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}
