import { connect, MapDispatchToProps } from "react-redux";
import Nav from "../components/Nav";
import { push } from "connected-react-router";

const mapStateToProps = (state: any) => ({
  categories: state.shopping.categories
});

const mapDispatchToProps = (dispatch: Function) => ({
  onClick(path: string) {
    dispatch(push(path));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
