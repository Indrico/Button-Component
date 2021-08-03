import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AlbumIcon from '@material-ui/icons/Album';
import BatteryFullIcon from '@material-ui/icons/BatteryFull';
import BookmarkIcon from '@material-ui/icons/Bookmark';

const Icon = (props) => {
    let style;
    if (props.margin === "start") {
        style = {
            marginRight: "5px"   
        }
    } else {
        style = {
            marginLeft: "5px"   
        }
    }
    return (
        <div>
            {props.iconName === "local_grocery_store" && <LocalGroceryStoreIcon fontSize="small" style={style}/> }
            {props.iconName === "access_time_icon" && <AccessTimeIcon fontSize="small" style={style}/> }
            {props.iconName === "album_icon" && <AlbumIcon fontSize="small" style={style}/> }
            {props.iconName === "battery_full" && <BatteryFullIcon fontSize="small" style={style}/> }
            {props.iconName === "bookmark_icon" && <BookmarkIcon fontSize="small" style={style}/> }
        </div>
    )
}

export default Icon