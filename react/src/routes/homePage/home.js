import React from "React";
//搜索组件(search)
import Search from "../../components/search/ComSearch";
import Banner from "../../components/banner/ComBanner";
function Home() {
    return (
        <div>
            <Search />
            <Search type="blue" />
            <Banner />
        </div>
    )
}

export default Home;