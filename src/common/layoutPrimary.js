import { Col, Layout, Row } from "antd";

import SidebarPrimary from "../components/SidebarPrimary";
import HeaderPrimary from "../components/headerPrimary";
import "./style.scss";
// import { height } from "@mui/system";

const { Header, Content } = Layout;

const LayoutPrimary = (props) => {
  return (
    <div className="site-layout">
      <Layout className="site-layout">
        <Header style={{ padding: 0 }}>
          <HeaderPrimary />
        </Header>

        <Content className="site-layout-background">
          <Row gutter={70} className="row-layout">
            <Col sm={6} style={{ padding: "0" }}>
              <SidebarPrimary />
            </Col>
            <Col sm={18} style={{ padding: "0" }}>
              {props.children}
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default LayoutPrimary;
