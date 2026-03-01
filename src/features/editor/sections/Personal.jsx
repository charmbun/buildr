import styles from "../EditorForm.module.css";

function Personal({ data, setData }) {
  function handleChange(e) {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      personal: {
        ...prevData.personal,
        [name]: value,
      },
    }));
  }

  return (
    <section>
      <h2>Personal Information</h2>

      <div className={styles.formGroup}>
        <label htmlFor="name">NAME *</label>
        <input
          className={styles.formControl}
          type="text"
          name="name"
          id="name"
          required
          value={data.personal.name}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">EMAIL *</label>
        <input
          className={styles.formControl}
          type="email"
          name="email"
          id="email"
          required
          value={data.personal.email}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="linkPortfolio">PORTFOLIO LINK</label>
        <input
          className={styles.formControl}
          type="url"
          name="linkPortfolio"
          id="linkPortfolio"
          required
          value={data.personal.linkPortfolio}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="linkGithub">GITHUB LINK</label>
        <input
          className={styles.formControl}
          type="url"
          name="linkGithub"
          id="linkGithub"
          required
          value={data.personal.linkGithub}
          onChange={handleChange}
        />
      </div>
    </section>
  );
}

export default Personal;
