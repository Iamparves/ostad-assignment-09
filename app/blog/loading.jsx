import Loader from "@/components/Loader";

const Loading = () => {
  return (
    <section className="h-[calc(100vh-64px)] flex justify-center items-center">
      <Loader />
    </section>
  );
};

export default Loading;
