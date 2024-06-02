import { apiSlice } from "../apiSlice";

const PROJECT_URL = "/task"
export const projectApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder)=> ({
    getDashboardStats: builder.query({
      query: () => ({
        url: `${PROJECT_URL}/dashboard`,
        method: "GET",
        credentials: "include",
      }),
    }),

    getAllProject: builder.query({
      query: ({ strQuery, isTrashed, search}) => ({
        url: `${PROJECT_URL}?stage=${strQuery}&isTrashed=${isTrashed}&search=${search}`,
        method: "GET",
        credentials: "include",
      }),
    }),

    createProject: builder.mutation({
      query: (data)=>({
        url: `${PROJECT_URL}/create`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),

    duplicateProject : builder.mutation({
      query: (id)=>({
        url: `${PROJECT_URL}/duplicate/${id}`,
        method: "POST",
        body: {},
        credentials: "include",
      }),
    }),

    updateProject : builder.mutation({
      query: (data)=>({
        url: `${PROJECT_URL}/update/${data._id}`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
    }),

    trashProject : builder.mutation({
      query: ({ id }) => ({
        url: `${PROJECT_URL}/${id}`,
        method: "PUT",
        credentials: "include",
      }),
    }),

    createSubProject: builder.mutation({
      query: ({data, id}) => ({
        url: `${PROJECT_URL}/create-subtask/${id}`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
    }),

    getSingleProject: builder.query({
      query: (id) => ({
        url: `${PROJECT_URL}/${id}`,
        method: "GET",
        credentials: "include",
      }),
    }),

    postProjectActivity: builder.mutation({
      query: ({ data, id }) =>({
        url: `${PROJECT_URL}/activity/${id}`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),

    deleteRestoreProject: builder.mutation({
      query: ({  id, actionType  }) => ({
        url: `${PROJECT_URL}/delete-restore/${id}?actionType=${actionType}`,
        method: "DELETE",
        credentials: "include",
      }),
    }),

  }),
});

export const {
  useGetDashboardStatsQuery, 
  useGetAllProjectQuery,
  useCreateProjectMutation,
  useDuplicateProjectMutation,
  useUpdateProjectMutation, 
  useTrashProjectMutation,
  useCreateSubProjectMutation,
  useGetSingleProjectQuery,
  usePostProjectActivityMutation,
  useDeleteRestoreProjectMutation,
} = projectApiSlice;