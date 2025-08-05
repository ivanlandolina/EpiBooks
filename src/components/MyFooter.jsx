function MyFooter() {
  return (
    <>
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p className="mb-0">© 2025 EpiBooks. All rights reserved.</p>
        <p>
          <a href="#" className="text-white fs-4"><i className="bi bi-twitter"></i></a> |{' '}
          <a href="#" className="text-white fs-4"><i className="bi bi-facebook"></i></a> |{' '}
          <a href="#" className="text-white fs-4"><i className="bi bi-instagram"></i></a>
        </p>
      </div>
    </footer>
    </>
  );
}

export default MyFooter;