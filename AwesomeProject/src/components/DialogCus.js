import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Dialog from 'react-native-dialog';
import {useDispatch, useSelector} from 'react-redux';
import {
  addCommentChild,
  deleteComment,
  editComment,
  hideDialog,
} from '../redux/slices/commentSlice';
import {COLOR} from '../constant/color';
import {showNoti} from '../toolkit/helper';
const DialogCus = () => {
  const dispatch = useDispatch();
  const {
    action,
    visible,
    text,
    listCommentChid,
    commentChild,
    idComment,
    name,
    child,
  } = useSelector(state => state.commentSlice);
  // const {
  //   handleAddCommentChild,
  //   handleEditComment,
  //   handleDeleteComment,
  //   setVisible,
  //   action,
  //   listCommentChid,
  //   idComment,
  //   commentChild,
  //   message,
  // } = useContext(AuthContext);

  const [title, setTitle] = useState('');
  const [actionComment, setActionComment] = useState('');

  const handleCancel = () => {
    dispatch(hideDialog());
  };

  const handleSave = value => {
    if (action !== 'delete' && value.trim() === '') {
      showNoti('Không để trống phản hồi', 'error');
      return;
    }
    dispatch(hideDialog());
    switch (action) {
      case 'reply': {
        dispatch(addCommentChild({value, listCommentChid, idComment, name}));
        // handleAddCommentChild(value, listCommentChid, idComment);
        break;
      }
      case 'edit': {
        dispatch(editComment(value));
        // handleEditComment(value, listCommentChid, idComment, commentChild);
        break;
      }
      case 'delete': {
        dispatch(deleteComment());
        // handleDeleteComment(value, listCommentChid, idComment, commentChild);
        break;
      }
    }
  };

  useEffect(() => {
    switch (action) {
      case 'reply':
        setTitle('Phản hồi bình luận');
        setActionComment('');

        break;
      case 'edit':
        setTitle('Chỉnh sửa bình luận');
        setActionComment(text);
        break;
      case 'delete':
        setTitle('Xóa bình luận');
        break;
      default:
        break;
    }
  }, [action, text]);

  return (
    <View style={styles.container}>
      <Dialog.Container visible={visible}>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 10,
          }}>
          {title}
        </Text>
        {action == 'delete' ? (
          <Text style={{fontSize: 14, color: COLOR.black}}>
            Bạn chắc chắn muốn xóa bình luận này ?
          </Text>
        ) : (
          <TextInput
            value={actionComment}
            onChangeText={value => setActionComment(value)}
            style={{
              width: '100%',
              height: 40,
              borderWidth: 1,
              padding: 10,
              color: COLOR.black,
            }}
          />
        )}
        <Dialog.Button label="Quay lại" onPress={() => handleCancel()} />
        <Dialog.Button
          label={action == 'delete' ? 'Xóa' : 'Lưu'}
          onPress={() => {
            setActionComment('');
            handleSave(actionComment);
          }}
        />
      </Dialog.Container>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});
export default DialogCus;
