import { ReactElement } from "react";
import styles from "./MainWrapper.module.scss";
import { FooterLinks } from "../../../components/common/Footer";
import { HeaderMiddle } from "../../../components/common/HeaderMiddle/HeaderMiddle";

type TProps = {
  children: ReactElement;
};

const MainWrapperHOC = (props: TProps) => (
  <div className={styles.root}>
    <HeaderMiddle
      links={[
        { link: "/", label: "Главная" },
        { link: "/products", label: "Продукты" },
        { link: "/invest", label: "Инвесторам" },
        { link: "/dealers", label: "Дилерам" },
        { link: "/about", label: "О компании" },
      ]}
    />
    <div>{props.children}</div>
    <FooterLinks
      data={[
        {
          title: "About",
          links: [
            {
              label: "Features",
              link: "#",
            },
            {
              label: "Pricing",
              link: "#",
            },
            {
              label: "Support",
              link: "#",
            },
            {
              label: "Forums",
              link: "#",
            },
          ],
        },
        {
          title: "Project",
          links: [
            {
              label: "Contribute",
              link: "#",
            },
            {
              label: "Media assets",
              link: "#",
            },
            {
              label: "Changelog",
              link: "#",
            },
            {
              label: "Releases",
              link: "#",
            },
          ],
        },
        {
          title: "Community",
          links: [
            {
              label: "Join Discord",
              link: "#",
            },
            {
              label: "Follow on Twitter",
              link: "#",
            },
            {
              label: "Email newsletter",
              link: "#",
            },
            {
              label: "GitHub discussions",
              link: "#",
            },
          ],
        },
      ]}
    />
  </div>
);

export const MainWrapper = MainWrapperHOC;
