const styles = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: "center",
  },
};

export default function Home() {
  return (
    <>
      <h1 style={styles.title}>
        Task manager welcome page{" "}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </>
  );
}
