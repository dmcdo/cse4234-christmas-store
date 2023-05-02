import Header from "./components/Header";
import Footer from "./components/Footer";
import DealTable from "./components/DealTable";
import DealCard from "./components/DealCard";
import DealGrid from "./components/DealGrid";

import { GetItems } from "../models/DB.js";

function Deal() {
    let data = GetItems();

    if (!data)
        return <>Loading...</>

    return <>
        <Header />

        <DealTable data={data} />
        <br />
        <DealGrid deals={ data.map(i => <DealCard item={ i } />) } rows={ 2 } cols={ 2 } />

        <Footer />
    </>
}

export default Deal;
