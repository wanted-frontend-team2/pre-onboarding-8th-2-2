import loadingImg from '../images/loading.svg';

function Loding() {
  return (
    <section className="flex justify-center items-center w-screen h-screen">
      <p>Loading...</p>
      <img src={loadingImg} alt="loding" className="animate-spin h-5 w-5" />
    </section>
  );
}

export default Loding;
