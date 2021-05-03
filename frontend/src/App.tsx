
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";
function App() {
  return (
    <>
    <NavBar />
    <div className="container">
     <h1 className="text-primary">Good Morning World</h1>
     <DataTable />
    
    </div>
    <Footer />
    </>
  );
}

export default App;
