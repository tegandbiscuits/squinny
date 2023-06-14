import React, { useEffect, useState } from 'react';
import { Card } from 'react-native-paper';
import { FlatList } from 'react-native-gesture-handler';
import { PostView } from 'lemmy-js-client';
import useLemmy from '../useLemmy';

function PostListScreen() {
  const { lemmy } = useLemmy();
  const [posts, setPosts] = useState<PostView[]>([]);

  useEffect(() => {
    lemmy?.getPosts({}).then((res) => {
      setPosts(res.posts);
    }).catch((err) => {
      // need to do something for the user
      throw new Error(`Failed to load posts: ${err}`);
    });
  }, [lemmy, setPosts]);

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.post.ap_id}
      renderItem={({ item }) => (
        <Card>
          {item.post.thumbnail_url && (
            <Card.Cover source={{ uri: item.post.thumbnail_url }} />
          )}
          <Card.Title title={item.post.name} />
        </Card>
      )}
    />
  );
}

export default PostListScreen;
