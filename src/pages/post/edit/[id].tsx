import { Box, Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import InputField from "../../../components/InputField";
import Layout from "../../../components/Layout";
import {
  usePostQuery,
  useUpdatePostMutation,
} from "../../../generated/graphql";
import { createUrqlClient } from "../../../utils/createUrqlClient";
import { useGetIntId } from "../../../utils/useGetIntId";
import { useIsAuth } from "../../../hooks/useIsAuth";
import StyledBox from "../../../components/StyledBox";

const EditPost = ({}) => {
  const intId = useGetIntId();
  const router = useRouter();
  const [{ data, fetching }] = usePostQuery({
    pause: intId === -1,
    variables: {
      postId: intId,
    },
  });
  const [, updatePost] = useUpdatePostMutation();

  useIsAuth();

  if (fetching) {
    return (
      <Layout>
        <div>loading...</div>
      </Layout>
    );
  }

  if (!data?.post) {
    return (
      <Layout>
        <Box>could not find post</Box>
      </Layout>
    );
  }

  return (
    <Layout variant="medium">
      <Formik
        initialValues={{ title: data.post.title, text: data.post.text }}
        onSubmit={async (values) => {
          await updatePost({ ...values, id: intId });
          router.back();
        }}
      >
        {({ isSubmitting }) => (
          <StyledBox>
            <Form>
              <InputField
                name="title"
                placeholder="title"
                label="Title"
                required
              />
              <Box mt={4}>
                <InputField
                  textarea
                  name="text"
                  placeholder="text..."
                  label="Body"
                  required
                />
              </Box>
              <Button
                mt={4}
                type="submit"
                isLoading={isSubmitting}
                colorScheme="teal"
              >
                update post
              </Button>
            </Form>
          </StyledBox>
        )}
      </Formik>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(EditPost);
