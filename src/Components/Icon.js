import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AlbumIcon from '@material-ui/icons/Album';

const Icon = (props) => {
    return (
        <div>
            {props.iconName === "local_grocery_store" && <LocalGroceryStoreIcon fontSize="small"/> }
            {props.iconName === "access_time_icon" && <AccessTimeIcon fontSize="small"/> }
            {props.iconName === "album_icon" && <AlbumIcon fontSize="small"/> }
        </div>
    )
}

export default Icon