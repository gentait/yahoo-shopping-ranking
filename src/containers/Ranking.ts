import { connect } from "react-redux";
import Ranking from "../components/Ranking";
import * as actions from "../actions/Ranking";

//TODO:Reducerを定義後実装
const mapStateToProps = (state: any, ownProps: any) => ({
  categoryId: ownProps.categoryId,
  category: state.Ranking.category,
  ranking: state.Ranking.ranking,
  error: state.Ranking.error
});

const mapDispatchToProps = (dispatch: Function) => ({
  onMount(categoryId: string) {
    dispatch(actions.fetchRankig(categoryId));
  },
  onUpdate(categoryId: string) {
    dispatch(actions.fetchRankig(categoryId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ranking);
