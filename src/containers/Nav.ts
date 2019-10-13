import { connect } from "react-redux";
import Nav from "../components/Nav";

const mapStateToProps = (state: any) => ({
  categories: state.shopping.categories
});

export default connect(mapStateToProps)(Nav);
