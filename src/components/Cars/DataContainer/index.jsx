// libraries
import { useCallback, useEffect } from 'react';
import {
  func, oneOfType, arrayOf, node, bool,
} from 'prop-types';
import { useDispatch } from 'react-redux';
// actions
import { setDownloadingFlag } from 'actions/cars';

const DataContainer = ({
  apiRequest, action, downloadingFlag, children,
}) => {
  const dispatch = useDispatch();
  const fetchData = useCallback(async () => {
    if (downloadingFlag) {
      dispatch(setDownloadingFlag(true));
    }
    try {
      const apiData = await apiRequest();
      dispatch(action(apiData));
      if (downloadingFlag) {
        dispatch(setDownloadingFlag(false));
      }
    } catch (e) {
      console.log(e);
    }
  }, [apiRequest, dispatch, action, downloadingFlag]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    children
  );
};

DataContainer.propTypes = {
  downloadingFlag: bool,
  apiRequest: func.isRequired,
  action: func.isRequired,
  children: oneOfType([arrayOf(node), node]).isRequired,
};

DataContainer.defaultProps = {
  downloadingFlag: false,
};

export default DataContainer;
