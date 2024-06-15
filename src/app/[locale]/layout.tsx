import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {useMessages} from "next-intl";
import {NextIntlClientProvider} from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Jakub Niewczas Portfolio",
    description: "College project",
};

type Props = {
    children: React.ReactNode;
    params: {
        locale: "en" | "pl"
    }
}

const RootLayout: React.FC<Props> = ({ children , params: {locale}}) => {
    const messages = useMessages();

    return(
        <html lang={locale}>
        <body>
            <NextIntlClientProvider messages={messages}>
                {children}
            </NextIntlClientProvider>
        </body>
        </html>
    );
}

export default RootLayout;
