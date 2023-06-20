export const wrapper = {
  position: "relative" as const,
  width: "325px",
  height: "250px",
};

export const widget = {
  width: "100%",
  height: "100%",
  padding: "16px",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "space-between",
  fontSize: "14px",
  fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
  background: "white",
  borderRadius: "16px",
  boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.5)",
};

export const header = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "16px",
};

export const footer = {
  padding: "0",
  margin: "0",
  textAlign: "center" as const,
  fontSize: "12px",
  opacity: "0.5",
};

export const footerLink = {
  color: "inherit",
  textDecoration: "none",
};

export const title = {
  padding: "0",
  margin: "0",
  fontSize: "16px",
  fontWeight: "bold",
};

export const content = {
  height: "100%",
};

export const form = {
  width: "320px",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "space-between",
  margin: "auto",
};

export const label = {
  marginTop: "8px",
  marginBottom: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export const input = {
  width: "100%",
  maxWidth: "305px",
  padding: "6px",
  fontSize: "14px",
  borderRadius: "8px",
  border: "1px solid",
  fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
};

export const bar = {
  height: "10px",
  borderRadius: "8px",
  background:
    "linear-gradient(to right,#f87171, #fb923c, #fbbf24, #a3e635, #4ade80)",
};

export const rating = {
  display: "flex",
  alignItems: "center",
};

export const radio = {
  margin: "0 0 0 10px",
};

export const textarea = {
  width: "100%",
  maxWidth: "305px",
  height: "60px",
  padding: "6px",
  fontSize: "14px",
  borderRadius: "8px",
  border: "1px solid",
  fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
};

export const buttons = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "65px",
};

export const button = {
  width: "88px",
  height: "88px",
  padding: "8px",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: "16px",
  border: "1px solid",
  background: "#f8fafc",
  cursor: "pointer",
};

export const submit = {
  marginTop: "8px",
  marginBottom: "8px",
  padding: "5px 10px",
  cursor: "pointer",
  borderRadius: "8px",
  border: "1px solid",
  background: "none",
  fontSize: "18px",
};
