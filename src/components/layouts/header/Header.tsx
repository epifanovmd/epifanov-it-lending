import React, { ChangeEvent, FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { routepaths, routes } from "../../../routes";
import { TextEllipsisWithTooltip } from "../../common";
import TelegramIcon from "../../../icons/svg/Telegram.svg";
import { Select } from "antd";

export const Header: FC = memo(() => {
  const { t, i18n } = useTranslation();

  const changeLang = async (value: string) => {
    await i18n.changeLanguage(value);
  };

  return (
    <HeaderWrap>
      <Link to={routepaths.ROOT}>
        <Logo>IT без названия</Logo>
      </Link>

      <Pages>
        {routes.map(({ path, pathName }) => (
          <TextEllipsisWithTooltip text={t(pathName)} key={path}>
            <Link to={path}>{t(pathName)}</Link>
          </TextEllipsisWithTooltip>
        ))}
      </Pages>

      <Contacts>
        <Phone>{"+7 (904) 051-38-05"}</Phone>
        <A href="https://t.me/epifanovmd">
          <TelegramIcon />
        </A>
      </Contacts>
    </HeaderWrap>
  );
});

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
  padding: 16px 32px;
  border-radius: 16px;
  box-shadow: 0 6px 18px rgb(0 12 58 / 4%);
`;

const A = styled.a`
  display: flex;
  align-items: center;
  color: #000;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: #000;
  margin-right: 64px;
`;

const Pages = styled.div`
  font-size: 24px;
  font-weight: 500;
  flex-grow: 1;
  margin: 0 32px;
`;

const Contacts = styled.div`
  display: flex;
  align-items: center;
`;

const Phone = styled.div`
  color: #000;
  margin-right: 16px;
`;

const Link = styled(NavLink)`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  &.active {
    color: blue;
  }
`;
