import Button from "../Button/button"
import SearchBar from "../SearchBox/searchBar"
import "./navbar.css"
export default () => {
    return <div className="navbar">
        <img src = "logo.png" width ={67} height={34}/>
        <SearchBar/>
        <Button>Give Feedback</Button>
    </div>
}