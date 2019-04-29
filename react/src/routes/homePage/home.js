import React from "React";
//搜索组件(search)
import Search from "../../components/search/ComSearch";

function Home() {
    return (
        <div>
            <Search />
            <Search type="blue" />
        </div>
    )
}

export default Home;