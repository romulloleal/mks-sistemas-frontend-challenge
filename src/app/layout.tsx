import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers";
import { Cart } from "@/components/Cart";
import { Footer, Header, Main } from "./page.styled";
import StyledComponentsRegistry from "@/lib/registry";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MKS Sistemas",
  description: "MKS Sistemas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            newestOnTop
            hideProgressBar
          />
          <StyledComponentsRegistry>
            <Header>
              <div className="content">
                <div className="logo">
                  MKS <span>sistemas</span>
                </div>

                <Cart />
              </div>
            </Header>
            <Main>{children}</Main>
            <Footer>MKS sistemas &copy; Todos os direitos reservados</Footer>
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}
