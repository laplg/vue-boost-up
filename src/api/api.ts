/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** AssignTask info */
export interface AssignTask {
  /** The user id */
  assignTo?: string
}

/** Comment */
export interface Comment {
  /** The date where comment is added */
  commentDate?: string
  /** Comment text. */
  comments?: string
  /** Comment's id */
  id?: number
  /** The id of project (comment of project) */
  projectId?: number
  /** The task id (comment of task) */
  taskId?: number
}

/** Comment creation */
export interface CommentCreation {
  /** Comment text. */
  comments?: string
  /** The id of project (comment of project) */
  projectId?: number
  /** The task id (comment of task) */
  taskId?: number
}

/** Error response */
export interface ErrorResponse {
  /** The error message. */
  message?: string
}

/** Label */
export interface Label {
  /** The label's id */
  id?: number
  /** The title */
  title?: string
}

/** Label creation info */
export interface LabelCreation {
  /** The id of label whose order > created label */
  aboveLabel?: number
  /** The id of label whose order < created label */
  belowLabel?: number
  /** The title */
  title?: string
}

/** A project */
export interface Project {
  /** The project archive status */
  archived?: boolean
  /** The created date */
  createdAt?: string
  /** The default Inbox project */
  defaultInbox?: boolean
  /** The column to group tasks */
  groupBy?: string
  /** The project id */
  id?: number
  /** The modified date */
  modifiedAt?: string
  /** The project name */
  name?: string
  /** Show / hide completed tasks */
  showCompleted?: boolean
  /** The column to sort tasks */
  sortBy?: string
  /** The sort direction, Asc or Desc */
  sortDir?: string
  /** The total tasks in the project */
  taskCount?: number
  /** The project extra info */
  users?: UserProject[]
  /** The view type (1 or 2) */
  view?: number
}

/** Project comment creation info */
export interface ProjectCommentCreation {
  /** Comment text. */
  comments?: string
}

/** Project creation */
export interface ProjectCreation {
  /** The id of project that this project will be created with less order */
  aboveProject?: number
  /** THe id of project that this project will be created with greater order */
  belowProject?: number
  /** The project name */
  name: string
  /** The view type (1 or 2) */
  view?: number
}

/** Project update info */
export interface ProjectModification {
  /** The column to group tasks */
  groupBy?: string
  /** The project name */
  name: string
  /** Show / hide completed tasks */
  showCompleted?: boolean
  /** The column to sort tasks */
  sortBy?: string
  /** The sort direction, Asc or Desc */
  sortDir?: string
  /** The view type (1 or 2) */
  view?: number
}

/** Search result */
export interface SearchResult {
  /** : Matched comment info */
  comment?: Comment
  /** Matched project info */
  project?: Project
  /** : Matched task info */
  task?: Task
}

/** Section */
export interface Section {
  /** The section id */
  id?: number
  /** The section name */
  name?: string
  /** The open or collapse state of the section */
  open?: boolean
  /** The section order */
  order?: number
  /** The parent project's id */
  projectId?: number
  /** The section's tasks */
  tasks?: Task[]
}

/** Section creation info */
export interface SectionCreation {
  /** Insert section above specified section */
  aboveSection?: number
  /** Insert section below specified section */
  belowSectin?: number
  /** The section name */
  name?: string
  /** The section order */
  order?: number
  /** The parent project's id */
  projectId?: number
}

/** Share project request */
export interface ShareProjectRequest {
  /** Lists of user ids */
  users: string[]
}

/** Task attribute */
export interface Task {
  /** The user id */
  assignTo?: string
  /** The task completion status */
  completed?: boolean
  /** The task description */
  description?: string
  /** The task due date */
  dueDate?: string
  /** The task id */
  id?: number
  /** The labels of the task */
  labels?: Label[]
  /** The id of parent task */
  parentTaskId?: number
  /** The task priority (0-3) */
  priority?: number
  /** The project id */
  projectId?: number
  /** The section id */
  sectionId?: number
  /** The sub tasks. */
  subTasks?: object[]
  /** The order of the task */
  taskOrder?: number
  /** The title */
  title?: string
}

/** Task comment creation info */
export interface TaskCommentCreation {
  /** Comment text. */
  comments?: string
}

/** Task creation info */
export interface TaskCreation {
  /** The user id */
  assignTo?: string
  /** The task completion status */
  completed?: boolean
  /** The task description */
  description?: string
  /** The task due date */
  dueDate?: string
  /** The labels of the task */
  labels?: Label[]
  /** The id of parent task */
  parentTaskId?: number
  /** The task priority (0-3) */
  priority?: number
  /** The project id */
  projectId?: number
  /** The section id */
  sectionId?: number
  /** The order of the task */
  taskOrder?: number
  /** The title */
  title?: string
}

/** Task due date request */
export interface TaskDueDateRequest {
  /** The date in string format */
  dueDate?: string
}

/** TaskPriority request info */
export interface TaskPriorityRequest {
  /** The task priority (0-3) */
  priority?: number
}

/** User info */
export interface User {
  /** The user display name */
  displayName?: string
  /** The email */
  email?: string
  /** The user id */
  id?: string
  /** The photo url */
  photo?: string
}

/** User */
export interface UserProject {
  /** The user id */
  id?: string
  /** The extra prop */
  props?: UserProjectProp
}

/** User project prop */
export interface UserProjectProp {
  /** The favorite status of the project */
  favorite?: boolean
  /** The order of the project */
  order?: number
  /** True if user is the owner of the project */
  owner?: boolean
}

export type QueryParamsType = Record<string | number, any>
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean
  /** request path */
  path: string
  /** content type of request body */
  type?: ContentType
  /** query params */
  query?: QueryParamsType
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat
  /** request body */
  body?: unknown
  /** base url */
  baseUrl?: string
  /** request cancellation token */
  cancelToken?: CancelToken
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<RequestParams | void> | RequestParams | void
  customFetch?: typeof fetch
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D
  error: E
}

type CancelToken = Symbol | string | number

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain'
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = 'http://localhost:3000'
  private securityData: SecurityDataType | null = null
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker']
  private abortControllers = new Map<CancelToken, AbortController>()
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams)

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
  }

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig)
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data
  }

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key)
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key])
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key]
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&')
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {}
    const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key])
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key)
      )
      .join('&')
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery)
    return queryString ? `?${queryString}` : ''
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== 'string' ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key]
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
              ? JSON.stringify(property)
              : `${property}`
        )
        return formData
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input)
  }

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {})
      }
    }
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken)
      if (abortController) {
        return abortController.signal
      }
      return void 0
    }

    const abortController = new AbortController()
    this.abortControllers.set(cancelToken, abortController)
    return abortController.signal
  }

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken)

    if (abortController) {
      abortController.abort()
      this.abortControllers.delete(cancelToken)
    }
  }

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<T> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {}
    const requestParams = this.mergeRequestParams(params, secureParams)
    const queryString = query && this.toQueryString(query)
    const payloadFormatter = this.contentFormatters[type || ContentType.Json]
    const responseFormat = format || requestParams.format

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {})
        },
        signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
        body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body)
      }
    ).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>
      r.data = null as unknown as T
      r.error = null as unknown as E

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data
              } else {
                r.error = data
              }
              return r
            })
            .catch((e) => {
              r.error = e
              return r
            })

      if (cancelToken) {
        this.abortControllers.delete(cancelToken)
      }

      if (!response.ok) throw data
      return data.data
    })
  }
}

/**
 * @title Todo API
 * @version 1.0.0
 * @license MIT
 * @baseUrl http://localhost:3000
 *
 * Documentation for Todo API
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @name LabelsList
     * @summary Get all user labels
     * @request GET:/api/labels
     * @secure
     */
    labelsList: (params: RequestParams = {}) =>
      this.request<Label[], any>({
        path: `/api/labels`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @name LabelsUpdate
     * @summary Create a new label
     * @request PUT:/api/labels
     * @secure
     */
    labelsUpdate: (data: LabelCreation, params: RequestParams = {}) =>
      this.request<Label, any>({
        path: `/api/labels`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @name LabelsSearchDetail
     * @summary Swap labels order
     * @request GET:/api/labels/search/{query}
     * @secure
     */
    labelsSearchDetail: (query?: string, params: RequestParams = {}) =>
      this.request<Label[], any>({
        path: `/api/labels/search/${query}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @name LabelsDelete
     * @summary Delete the label
     * @request DELETE:/api/labels/{labelId}
     */
    labelsDelete: (labelId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/labels/${labelId}`,
        method: 'DELETE',
        ...params
      }),

    /**
     * No description
     *
     * @name LabelsCreate
     * @summary Rename label
     * @request POST:/api/labels/{labelId}
     * @secure
     */
    labelsCreate: (labelId: string, data: LabelCreation, params: RequestParams = {}) =>
      this.request<Label, any>({
        path: `/api/labels/${labelId}`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @name LabelsSwapCreate
     * @summary Swap labels order
     * @request POST:/api/labels/{labelId}/swap/{targetLabelId}
     * @secure
     */
    labelsSwapCreate: (labelId: number, targetLabelId: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/labels/${labelId}/swap/${targetLabelId}`,
        method: 'POST',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @name ProjectsList
     * @summary Get non-archived projects
     * @request GET:/api/projects
     * @secure
     */
    projectsList: (params: RequestParams = {}) =>
      this.request<Project[], any>({
        path: `/api/projects`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @name ProjectsUpdate
     * @summary Create a new project.
     * @request PUT:/api/projects
     * @secure
     */
    projectsUpdate: (data: ProjectCreation, params: RequestParams = {}) =>
      this.request<Project, ErrorResponse>({
        path: `/api/projects`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @name ProjectsArchivedList
     * @summary Get archived projects
     * @request GET:/api/projects/archived
     * @secure
     */
    projectsArchivedList: (params: RequestParams = {}) =>
      this.request<Project[], any>({
        path: `/api/projects/archived`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @name ProjectsDelete
     * @summary Delete a project
     * @request DELETE:/api/projects/{id}
     * @secure
     */
    projectsDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/api/projects/${id}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @name ProjectsDetail
     * @summary Get project by id
     * @request GET:/api/projects/{id}
     * @secure
     */
    projectsDetail: (id: number, params: RequestParams = {}) =>
      this.request<Project, any>({
        path: `/api/projects/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @name ProjectsCreate
     * @summary Update a project
     * @request POST:/api/projects/{id}
     * @secure
     */
    projectsCreate: (id: number, data: ProjectModification, params: RequestParams = {}) =>
      this.request<Project, ErrorResponse>({
        path: `/api/projects/${id}`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @name ProjectsCommentDetail
     * @summary Get project comments
     * @request GET:/api/projects/{id}/comment
     * @secure
     */
    projectsCommentDetail: (id: number, params: RequestParams = {}) =>
      this.request<Comment[], any>({
        path: `/api/projects/${id}/comment`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @name ProjectsCommentUpdate
     * @summary Add project comment
     * @request PUT:/api/projects/{id}/comment
     * @secure
     */
    projectsCommentUpdate: (id: number, data: ProjectCommentCreation, params: RequestParams = {}) =>
      this.request<Comment, ErrorResponse>({
        path: `/api/projects/${id}/comment`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @name ProjectsAddFavoriteCreate
     * @summary Add project to favorite lists
     * @request POST:/api/projects/{projectId}/addFavorite
     * @secure
     */
    projectsAddFavoriteCreate: (projectId: number, params: RequestParams = {}) =>
      this.request<any, ErrorResponse>({
        path: `/api/projects/${projectId}/addFavorite`,
        method: 'POST',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @name ProjectsDuplicateCreate
     * @summary Duplicate the project
     * @request POST:/api/projects/{projectId}/duplicate
     * @secure
     */
    projectsDuplicateCreate: (projectId: number, params: RequestParams = {}) =>
      this.request<any, ErrorResponse>({
        path: `/api/projects/${projectId}/duplicate`,
        method: 'POST',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @name ProjectsLeaveCreate
     * @summary Leave the project
     * @request POST:/api/projects/{projectId}/leave
     * @secure
     */
    projectsLeaveCreate: (projectId: number, params: RequestParams = {}) =>
      this.request<any, ErrorResponse>({
        path: `/api/projects/${projectId}/leave`,
        method: 'POST',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @name ProjectsRemoveFavoriteCreate
     * @summary Remove project off the favorite lists
     * @request POST:/api/projects/{projectId}/removeFavorite
     * @secure
     */
    projectsRemoveFavoriteCreate: (projectId: number, params: RequestParams = {}) =>
      this.request<any, ErrorResponse>({
        path: `/api/projects/${projectId}/removeFavorite`,
        method: 'POST',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @name ProjectsSectionsDetail
     * @summary Get project's sections
     * @request GET:/api/projects/{projectId}/sections
     * @secure
     */
    projectsSectionsDetail: (projectId: number, params: RequestParams = {}) =>
      this.request<Section[], any>({
        path: `/api/projects/${projectId}/sections`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @name ProjectsSectionsUpdate
     * @summary Create a new section
     * @request PUT:/api/projects/{projectId}/sections
     * @secure
     */
    projectsSectionsUpdate: (projectId: number, params: RequestParams = {}) =>
      this.request<Section, ErrorResponse>({
        path: `/api/projects/${projectId}/sections`,
        method: 'PUT',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @name ProjectsSectionsDelete
     * @summary Delete a section
     * @request DELETE:/api/projects/{projectId}/sections/{sectionId}
     * @secure
     */
    projectsSectionsDelete: (projectId: number, sectionId: number, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/api/projects/${projectId}/sections/${sectionId}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @name ProjectsSectionsDetail2
     * @summary Get a single section info
     * @request GET:/api/projects/{projectId}/sections/{sectionId}
     * @originalName projectsSectionsDetail
     * @duplicate
     * @secure
     */
    projectsSectionsDetail2: (projectId: number, sectionId: string, params: RequestParams = {}) =>
      this.request<Section, any>({
        path: `/api/projects/${projectId}/sections/${sectionId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @name ProjectsSectionsCreate
     * @summary Update section info
     * @request POST:/api/projects/{projectId}/sections/{sectionId}
     * @secure
     */
    projectsSectionsCreate: (
      projectId: number,
      sectionId: string,
      data?: SectionCreation,
      params: RequestParams = {}
    ) =>
      this.request<Section, ErrorResponse>({
        path: `/api/projects/${projectId}/sections/${sectionId}`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @name ProjectsSectionsDuplicateCreate
     * @summary Dupliate a section
     * @request POST:/api/projects/{projectId}/sections/{sectionId}/duplicate
     * @secure
     */
    projectsSectionsDuplicateCreate: (
      projectId: number,
      sectionId: number,
      params: RequestParams = {}
    ) =>
      this.request<Section, ErrorResponse>({
        path: `/api/projects/${projectId}/sections/${sectionId}/duplicate`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @name ProjectsSectionsSwapCreate
     * @summary Swap section order
     * @request POST:/api/projects/{projectId}/sections/{sectionId}/swap/{targetSectionId}
     * @secure
     */
    projectsSectionsSwapCreate: (
      projectId: number,
      sectionId: number,
      targetSectionId: number,
      params: RequestParams = {}
    ) =>
      this.request<Section[], any>({
        path: `/api/projects/${projectId}/sections/${sectionId}/swap/${targetSectionId}`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @name ProjectsSwapCreate
     * @summary Swap project's order
     * @request POST:/api/projects/{projectId}/swap/{targetProjectId}
     * @secure
     */
    projectsSwapCreate: (projectId: number, targetProjectId: number, params: RequestParams = {}) =>
      this.request<Project[], ErrorResponse>({
        path: `/api/projects/${projectId}/swap/${targetProjectId}`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Return all tasks from a project.
     *
     * @name ProjectsTaskDetail
     * @summary Get project's tasks
     * @request GET:/api/projects/{projectId}/tasks
     * @secure
     */
    projectsTaskDetail: (projectId: number, params: RequestParams = {}) =>
      this.request<Task[], any>({
        path: `/api/projects/${projectId}/tasks`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Create a new task
     *
     * @name ProjectsTasksUpdate
     * @summary Create a new task
     * @request PUT:/api/projects/{projectId}/tasks
     * @secure
     */
    projectsTasksUpdate: (projectId: number, data: TaskCreation, params: RequestParams = {}) =>
      this.request<Task, Task>({
        path: `/api/projects/${projectId}/tasks`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Delete a task
     *
     * @name ProjectsTasksDelete
     * @summary Delete a task
     * @request DELETE:/api/projects/{projectId}/tasks/{taskId}
     * @secure
     */
    projectsTasksDelete: (projectId: number, taskId: number, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/api/projects/${projectId}/tasks/${taskId}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * @description Return a single task info by id
     *
     * @name ProjectsTasksDetail
     * @summary Get task info
     * @request GET:/api/projects/{projectId}/tasks/{taskId}
     * @secure
     */
    projectsTasksDetail: (projectId: number, taskId: number, params: RequestParams = {}) =>
      this.request<Task, any>({
        path: `/api/projects/${projectId}/tasks/${taskId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Update task
     *
     * @name ProjectsTasksCreate
     * @summary Update task info
     * @request POST:/api/projects/{projectId}/tasks/{taskId}
     * @secure
     */
    projectsTasksCreate: (
      projectId: number,
      taskId: number,
      data: TaskCreation,
      params: RequestParams = {}
    ) =>
      this.request<Task, ErrorResponse>({
        path: `/api/projects/${projectId}/tasks/${taskId}`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Assign a task to a user
     *
     * @name ProjectsTasksAssignTaskCreate
     * @summary Assign task to a user
     * @request POST:/api/projects/{projectId}/tasks/{taskId}/assignTask
     * @secure
     */
    projectsTasksAssignTaskCreate: (
      projectId: number,
      taskId: number,
      data: AssignTask,
      params: RequestParams = {}
    ) =>
      this.request<Task, Task>({
        path: `/api/projects/${projectId}/tasks/${taskId}/assignTask`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @name ProjectsTasksCommentDetail
     * @summary Get task comments
     * @request GET:/api/projects/{projectId}/tasks/{taskId}/comment
     * @secure
     */
    projectsTasksCommentDetail: (projectId: number, taskId: number, params: RequestParams = {}) =>
      this.request<Comment[], any>({
        path: `/api/projects/${projectId}/tasks/${taskId}/comment`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @name ProjectsTasksCommentUpdate
     * @summary Add task comment
     * @request PUT:/api/projects/{projectId}/tasks/{taskId}/comment
     * @secure
     */
    projectsTasksCommentUpdate: (
      projectId: number,
      taskId: number,
      data: TaskCommentCreation,
      params: RequestParams = {}
    ) =>
      this.request<Comment, ErrorResponse>({
        path: `/api/projects/${projectId}/tasks/${taskId}/comment`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Mark the task as done
     *
     * @name ProjectsTasksCompleteCreate
     * @summary Set task as done
     * @request POST:/api/projects/{projectId}/tasks/{taskId}/complete
     * @secure
     */
    projectsTasksCompleteCreate: (projectId: number, taskId: number, params: RequestParams = {}) =>
      this.request<Task, Task>({
        path: `/api/projects/${projectId}/tasks/${taskId}/complete`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Set the task due date
     *
     * @name ProjectsTasksDuedateCreate
     * @summary Set the task due date
     * @request POST:/api/projects/{projectId}/tasks/{taskId}/duedate
     * @secure
     */
    projectsTasksDuedateCreate: (
      projectId: number,
      taskId: number,
      data: TaskDueDateRequest,
      params: RequestParams = {}
    ) =>
      this.request<Task, Task>({
        path: `/api/projects/${projectId}/tasks/${taskId}/duedate`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Duplicate the task (and its sub-tasks)
     *
     * @name ProjectsTasksDuplicateCreate
     * @summary Duplicate the task
     * @request POST:/api/projects/{projectId}/tasks/{taskId}/duplicate
     * @secure
     */
    projectsTasksDuplicateCreate: (projectId: number, taskId: number, params: RequestParams = {}) =>
      this.request<Task, Task>({
        path: `/api/projects/${projectId}/tasks/${taskId}/duplicate`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Move a task from a project to another one.
     *
     * @name ProjectsTasksMoveCreate
     * @summary Move task to other project
     * @request POST:/api/projects/{projectId}/tasks/{taskId}/move/{targetProjectId}/{targetSectionId}
     * @secure
     */
    projectsTasksMoveCreate: (
      projectId: number,
      taskId: number,
      targetProjectId: number,
      targetSectionId?: number,
      params: RequestParams = {}
    ) =>
      this.request<void, ErrorResponse>({
        path: `/api/projects/${projectId}/tasks/${taskId}/move/${targetProjectId}/${targetSectionId}`,
        method: 'POST',
        secure: true,
        ...params
      }),

    /**
     * @description Set the task priority
     *
     * @name ProjectsTasksPriorityCreate
     * @summary Set the task priority
     * @request POST:/api/projects/{projectId}/tasks/{taskId}/priority
     * @secure
     */
    projectsTasksPriorityCreate: (
      projectId: number,
      taskId: number,
      data: TaskPriorityRequest,
      params: RequestParams = {}
    ) =>
      this.request<Task, Task>({
        path: `/api/projects/${projectId}/tasks/${taskId}/priority`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Swap the order of 2 tasks
     *
     * @name ProjectsTasksSwapOrderCreate
     * @summary Swap task order
     * @request POST:/api/projects/{projectId}/tasks/{taskId}/swapOrder/{targetTaskId}
     * @secure
     */
    projectsTasksSwapOrderCreate: (
      projectId: number,
      taskId: number,
      targetTaskId: number,
      params: RequestParams = {}
    ) =>
      this.request<Task[], ErrorResponse>({
        path: `/api/projects/${projectId}/tasks/${taskId}/swapOrder/${targetTaskId}`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Return all matches result (task, project, comment)
     *
     * @name SearchDetail
     * @summary search
     * @request GET:/api/search/{query}
     * @secure
     */
    searchDetail: (query: string, params: RequestParams = {}) =>
      this.request<SearchResult[], any>({
        path: `/api/search/${query}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @name UsersAllList
     * @summary Return all users
     * @request GET:/api/users/all
     * @secure
     */
    usersAllList: (params: RequestParams = {}) =>
      this.request<User[], any>({
        path: `/api/users/all`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @name UsersSearchDetail
     * @summary Search user
     * @request GET:/api/users/search/{query}
     * @secure
     */
    usersSearchDetail: (query: string, params: RequestParams = {}) =>
      this.request<User[], any>({
        path: `/api/users/search/${query}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @name UsersValidateList
     * @summary Validate user authentication
     * @request GET:/api/users/validate
     * @secure
     */
    usersValidateList: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/users/validate`,
        method: 'GET',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @name ViewLabelDetail
     * @summary Get all tasks tagged by label
     * @request GET:/api/view/label/{labelId}
     * @secure
     */
    viewLabelDetail: (labelId: number, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/view/label/${labelId}`,
        method: 'GET',
        secure: true,
        ...params
      }),

    /**
     * @description Return all tasks that have due date <= today
     *
     * @name ViewTodayList
     * @summary get Tasks overdue today
     * @request GET:/api/view/today
     * @secure
     */
    viewTodayList: (params: RequestParams = {}) =>
      this.request<Task[], any>({
        path: `/api/view/today`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Return all upcomming tasks
     *
     * @name ViewUpcommingList
     * @summary get all upcoming tasks
     * @request GET:/api/view/upcomming
     * @secure
     */
    viewUpcommingList: (params: RequestParams = {}) =>
      this.request<Task[], any>({
        path: `/api/view/upcomming`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      })
  }
}
