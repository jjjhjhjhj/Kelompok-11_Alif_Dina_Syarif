import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTransaction } from "../context/TransactionContext";
import { Layout, Breadcrumb, Card, Row, Col, Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "../file/DashboardPage.css";

// Registrasi skala dan elemen Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const { Header, Content, Footer } = Layout;

const DashboardPage = () => {
  const navigate = useNavigate();
  const { transactions } = useTransaction();

  // Cek status login
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  // Hitung pemasukan, pengeluaran, dan saldo
  const pemasukan = transactions.reduce((acc, t) => acc + t.pemasukan, 0);
  const pengeluaran = transactions.reduce((acc, t) => acc + t.pengeluaran, 0);
  const saldo = pemasukan - pengeluaran;

  // Data untuk grafik
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Pemasukan",
        data: transactions.reduce((acc, t) => {
          const month = new Date(t.tanggal).getMonth();
          acc[month] += t.pemasukan;
          return acc;
        }, new Array(12).fill(0)),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
      {
        label: "Pengeluaran",
        data: transactions.reduce((acc, t) => {
          const month = new Date(t.tanggal).getMonth();
          acc[month] += t.pengeluaran;
          return acc;
        }, new Array(12).fill(0)),
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  // Konfigurasi opsi grafik
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Grafik Keuangan",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Bulan",
        },
      },
      y: {
        title: {
          display: true,
          text: "Jumlah (Rp)",
        },
      },
    },
  };

  // Menu dropdown dengan login/logout
  const menu = (
    <Menu>
      <Menu.Item>
        <Button type="link" onClick={() => navigate("/signup")}>
          Daftar
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button type="link" onClick={() => navigate("/login")}>
          Login
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button type="link" onClick={() => console.log("Logout dari aplikasi")}>
          Logout
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 16px",
            background: "#fff",
          }}
        >
          <h2>Dashboard Keuangan</h2>
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button type="primary">
              Menu <DownOutlined />
            </Button>
          </Dropdown>
        </Header>
        <Content style={{ margin: "16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={8}>
                <Card title="Pemasukan" bordered={false}>
                  Rp {pemasukan.toLocaleString()}
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Pengeluaran" bordered={false}>
                  Rp {pengeluaran.toLocaleString()}
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Saldo" bordered={false}>
                  Rp {saldo.toLocaleString()}
                </Card>
              </Col>
            </Row>
            <div className="chart-container" style={{ marginTop: "32px", height: "400px" }}>
              <Line data={data} options={options} />
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          ©2025 Keuangan App. All Rights Reserved.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardPage;
