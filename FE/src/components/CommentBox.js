import {View, FlatList, Text} from 'react-native';
import React from 'react';
import Comment from './Comment';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const CommentBox = ({message, showDialog}) => {
  return (
    <View style={{}}>
      <Comment
        showDialog={showDialog}
        message={message.message}
        name={message.name}
        idComment={message.id}
        listCommentChid={message.listCommentChid}
        createAt={message.createAt}
      />
      {message?.listCommentChid ? (
        <View
          style={{
            paddingLeft: 30,
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <FlatList
            data={message.listCommentChid}
            renderItem={({item}) => (
              <Comment
                name={message.name}
                message={item.message}
                idComment={message.id}
                listCommentChid={message.listCommentChid}
                isChild
                commentChild={item}
                createAt={item.id}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      ) : (
        <View />
      )}
    </View>
  );
};

export default CommentBox;
