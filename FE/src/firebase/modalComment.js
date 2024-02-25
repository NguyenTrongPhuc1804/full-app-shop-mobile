import {db, firebase} from '../firebase/firebase';
export const commentModal = {
  readComment: async (setListComment, idProduct, setLoadingComment) => {
    try {
      const data = await db
        .collection('list-comment')
        .where('idProduct', '==', idProduct)
        .onSnapshot(snapshot =>
          setListComment(
            snapshot.docs.map(doc => ({
              id: doc.id,
              idProduct: doc.data().idProduct,
              message: doc.data().message,
              name: doc.data().name,
              listCommentChid: doc.data().listCommentChid,
              createAt: doc.data().createAt.toDate().getTime(),
            })),
          ),
        );
      setLoadingComment(false);

      return data;
    } catch (e) {
      setLoadingComment(false);
      console.log(e.message);
    }
  },
};
