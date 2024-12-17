import { updateVotes } from "../api";
const VoteUpdate = (id, vote) => {
  return updateVotes(id, vote).then((updatedArticle) => {
    return updatedArticle;
  });
};
export default VoteUpdate;