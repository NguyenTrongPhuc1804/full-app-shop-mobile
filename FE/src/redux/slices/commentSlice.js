import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {db} from '../../firebase/firebase';
import {apiMobile} from '../../services/baseService';
import {showNoti, showToast} from '../../toolkit/helper';

const initialState = {
  visible: false,
  action: '',
  idComment: 0,
  text: '',
  commentChild: '',
  listCommentChid: [],
  child: false,
};

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    showDialog: (state, actionType) => {
      const {action, id, text, listCommentChid, commentChild, name, isChild} =
        actionType.payload;
      state.idComment = id;
      state.visible = true;
      state.action = action;
      state.text = text;
      state.commentChild = commentChild;
      state.listCommentChid = listCommentChid;
      state.name = name;
      state.child = isChild;
    },
    hideDialog: (state, action) => {
      state.visible = false;
    },
    editComment: (state, action) => {
      // const {action, id, text, listCommentChid, commentChild, name, isChild} =
      //   actionType.payload;
      if (state.child) {
        let newListComment = [...state.listCommentChid];
        let index = state.listCommentChid?.findIndex(
          item => item.id === state.commentChild.id,
        );
        if (index !== -1) {
          newListComment[index].message = action.payload;
          db.collection('list-comment')
            .doc(state.idComment)
            .update({listCommentChid: newListComment})
            .then(data => {
              console.log(data);
            });
        }
      } else {
        // commentModal.editComment(idComment, value);
        db.collection('list-comment')
          .doc(state.idComment)
          .update({message: action.payload})
          .then(data => {
            showToast('success', 'edit comment success ');
          });
      }
    },
    deleteComment: (state, action) => {
      if (!state.child) {
        db.collection('list-comment').doc(state.idComment).delete();
      } else {
        let newListComment = [...state.listCommentChid];
        newListComment = newListComment.filter(
          comment => comment.id !== state.commentChild.id,
        );
        db.collection('list-comment')
          .doc(state.idComment)
          .update({listCommentChid: newListComment})
          .then(data => {});
      }
    },
  },
  extraReducers: builder => {},
});
export const addComment = createAsyncThunk(
  'comment/addComment',
  async ({message, idProduct, name}, thunkApi) => {
    const {data} = await db.collection('list-comment').add({
      message,
      idProduct,
      name,
      listCommentChid: [],
      createAt: new Date(),
    });
    return data;
  },
);
export const addCommentChild = createAsyncThunk(
  'comment/addCommentChild',
  async ({idComment, value, listCommentChid, name}, thunkApi) => {
    const newListComment = [
      ...listCommentChid,
      {id: Date.now(), message: value, name},
    ];
    db.collection('list-comment')
      .doc(idComment)
      .update({listCommentChid: newListComment})
      .then(data => {
        console.log(data);
      });
    return data;
  },
);

// export const editComment = createAsyncThunk(
//   'comment/editComment',
//   async ({idComment, value, listCommentChid, name}, thunkApi) => {

//   },
// );
export const {showDialog, hideDialog, editComment, deleteComment} =
  commentSlice.actions;

export default commentSlice.reducer;
