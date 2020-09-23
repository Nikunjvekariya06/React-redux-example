import Home from "../components/home";
import { connect } from "react-redux";
import { Increement, Decreement } from "../services/action/action.home";

const mapStateToProps = (state) => ({
  data: state.Counter,
});

const mapDispatchToProps = (dispatch) => ({
  IncreementHandler: (data) => dispatch(Increement(data)),
  decreementHandler: (data) => dispatch(Decreement(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
