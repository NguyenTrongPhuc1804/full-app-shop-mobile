import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useContext, useState} from 'react';
import moment from 'moment';
import {COLOR} from '../constant/color';
import {showDialog} from '../redux/slices/commentSlice';
import {useDispatch, useSelector} from 'react-redux';
import {format, register} from 'timeago.js';
import {useEffect} from 'react';
import {getInfoUser} from '../redux/slices/userSlice';
const Comment = ({
  name,
  message,
  idComment,
  listCommentChid,
  isChild,
  commentChild,
  createAt,
}) => {
  const dispatch = useDispatch();
  const {isLogin} = useSelector(state => state.authSlice);
  const {user} = useSelector(state => state.userSlice);
  const localeFunc = (number, index, totalSec) => {
    return [
      ['bây giờ', 'right now'],
      ['%s giây trước', 'in %s seconds'],
      ['1 phút trước', 'in 1 minute'],
      ['%s phút trước', 'in %s minutes'],
      ['1 giờ trước', 'in 1 hour'],
      ['%s giờ trước', 'in %s hours'],
      ['1 ngày trước', 'in 1 day'],
      ['%s ngày trước', 'in %s days'],
      ['1 tuần trước', 'in 1 week'],
      ['%s tuần trước', 'in %s weeks'],
      ['1 tháng trước', 'in 1 month'],
      ['%s tháng trước', 'in %s months'],
      ['1 năm trước', 'in 1 year'],
      ['%s năm trước', 'in %s years'],
    ][index];
  };
  register('vi_VN', localeFunc);
  useEffect(() => {
    dispatch(getInfoUser());
  }, []);

  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        style={{width: 40, height: 40}}
        source={{
          uri: 'https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg',
        }}
      />
      <View
        style={{
          padding: 10,
          backgroundColor: COLOR.third,
          borderRadius: 10,
          alignSelf: 'flex-start',
          marginTop: !isLogin ? 5 : 0,
          // marginBottom: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 14, color: COLOR.black, fontWeight: 'bold'}}>
            {isChild ? commentChild.name : name}
          </Text>

          <Text style={{color: COLOR.black, fontSize: 14, marginLeft: 5}}>
            {format(createAt, 'vi_VN')}
          </Text>
        </View>
        <Text style={{color: COLOR.black, fontSize: 18}}>{message}</Text>
      </View>
      {isLogin ? (
        <View
          style={{
            flexDirection: 'row',
            marginTop: 0,
            paddingLeft: isChild ? 0 : 10,
            marginBottom: isChild ? 10 : 0,
          }}>
          {!isChild ? (
            <TouchableOpacity
              onPress={
                () =>
                  dispatch(
                    showDialog({
                      action: 'reply',
                      id: idComment,
                      text: message,
                      listCommentChid,
                      commentChild,
                      isChild,
                      name: user.name,
                    }),
                  )
                //               showDialog(
                //                 'reply',
                //                 idComment,
                //                 listCommentChid,
                //                 commentChild,
                //                 isChild,
                //                 message,
                //               )
              }>
              <Text style={{color: 'black'}}>phản hồi</Text>
            </TouchableOpacity>
          ) : (
            <View />
          )}

          <TouchableOpacity
            onPress={
              () =>
                dispatch(
                  showDialog({
                    action: 'edit',
                    id: idComment,
                    text: message,
                    listCommentChid,
                    commentChild,
                    isChild,
                    name: user.name,
                  }),
                )
              //             showDialog(
              //               'edit',
              //               idComment,
              //               listCommentChid,
              //               commentChild,
              //               isChild,
              //               message,
              //             )
            }>
            <Text style={{color: 'black', marginHorizontal: 10}}>
              chỉnh sửa
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={
              () =>
                dispatch(
                  showDialog({
                    action: 'delete',
                    id: idComment,
                    text: message,
                    listCommentChid,
                    commentChild,
                    name: user.name,

                    isChild,
                  }),
                )
              //             showDialog(
              //               'delete',
              //               idComment,
              //               listCommentChid,
              //               commentChild,
              //               isChild,
              //               message,
              //             )
            }>
            <Text style={{color: 'black'}}>xóa</Text>
          </TouchableOpacity>
        </View>
      ) : (
        ''
      )}
    </View>
  );
};

export default Comment;
