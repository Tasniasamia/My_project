import './styles/app.scss'
import Providers from "../providers/userProvider";
import TabUser from '../contexts/tabContext';

export const metadata = {
    title: "Car2Go",
    description: "Do your ride with ease",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                    <Providers>
                        <TabUser>
                        {children}
                        </TabUser>
                    </Providers>
            </body>
        </html>
    );
}
