import { useState, useEffect } from "react";

/**
 * this values can be from URLSearchParams or
 * passed from location props
 * @return {*} with all of key value
 */
const useQueryName = props => {
  const [state, setState] = useState({ name: "", status: "", loaded: false });
  const searchQueryName = new URLSearchParams(props.search);

  useEffect(() => {
    if (!state.loaded) {
      if (props.state)
        setState({
          ...props.state,
          loaded: true
        });
      else if (searchQueryName.get("name") && searchQueryName.get("status"))
        setState({
          name: searchQueryName.get("name"),
          status: searchQueryName.get("status"),
          loaded: true
        });
      else setState({ ...state, loaded: true });
    }
  }, [props.state, searchQueryName, state]);

  return state;
};

export default useQueryName;
