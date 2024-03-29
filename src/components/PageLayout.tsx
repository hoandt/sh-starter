import LocaleSwitcher from "./LocaleSwitcher";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title: string;
};

export default function PageLayout({ children, title }: Props) {
  return (
    <>
      <div>
        <div>
          <h1>{title}</h1>
          {children}
          <div style={{ marginTop: 24 }}>
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </>
  );
}
