// import Topbar from "../../components/topbar/Topbar";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css";

export default function Home() {
    return (
        <>
            <h1>Am Here</h1>
            {/* <Topbar /> */}
            <div className="homeContainer">
                {/* <Sidebar />
                <Feed />*/}
                <Rightbar /> 
            </div>
        </>
    );
}