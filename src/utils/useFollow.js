import { useSelector } from 'react-redux';

export function useFollow(userId) {
  const { userFollow } = useSelector((state) => ({
    userFollow: state.getIn(['FollowReducer', 'follow'])
  }));

  return userFollow?.some((user) => user.id === userId);
}
