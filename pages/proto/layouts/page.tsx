import React from 'react';
import ProtoSearchBar from '../components/protoSearchBar';

interface IProps {
  small?: boolean;
}

const Page: React.FC<IProps> = ({ small, children }) => (
  <div id="proto-page-layout">
    {small ? (
      <div className="proto-header-small">
        <a href="/proto/search">
          <img height={34} src="/images/logo_RF_small.svg" alt="" />
        </a>
        <ProtoSearchBar small={true} />
      </div>
    ) : (
      <div className="proto-header">
        <img height={110} src="/images/logo_RF.svg" alt="" />
      </div>
    )}

    <main className="layout-center">
      <div>{children}</div>
    </main>
    <div className="footer">
      <a>This</a> is the footer
    </div>
    <style global jsx>{`
      #proto-page-layout {
        width: 100%;
      }
      .proto-header {
        height: 150px;
      }
      .proto-header-small {
        height: 70px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #000091;
      }
      .proto-header-small img {
        margin: 0 20px;
        display: block;
      }
      .proto-header img {
        margin: 20px;
      }

      main {
        height: calc(100vh - 200px);
        margin: auto;
      }
      .footer {
        height: 50px;
      }
      a,
      a:hover {
        color: #000091;
        text-decoration: underline;
        background-color: none;
        background: none;
      }
    `}</style>
  </div>
);

export default Page;
