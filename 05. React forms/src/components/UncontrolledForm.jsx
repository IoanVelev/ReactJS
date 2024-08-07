export default function UncontrolledForm() {
    const formSubmitHanlder = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        console.log(formData.get('username'));
        

        console.log('Form Submit');
        
    }

  return (
    <>
      <h1>Uncontrolled Form</h1>
      <form onSubmit={formSubmitHanlder}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <div>
            <input type="submit" value="Login" />
        </div>
      </form>
    </>
  );
}
