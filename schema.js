export const typeDefs = `#graphql

scalar Date

type ProjectSummary {
	projectID: ID!
	durationInfo: DurationInfo
	cohortsSummary: [CohortSummary]
}

type CohortSummary {
	cohortID: ID!
	durationInfo: DurationInfo
	numberOfUsers: Int!
	stagesSummary: [StageSummary]
}

type StageSummary {
	stageID: ID!
	durationInfo: DurationInfo
	statisticsInfo: StatisticsInfo
}

type ProjectFlowStageStats {
    projectID: ID!
    durationInfo: DurationInfo
    numberOfCohorts: Int!
    status: Status
    flowsRun: [FlowRun!]
}

type FlowRun {
    flowType: FlowType
    flowVersion: Int
    overallStatus: Status!
    flow: String!
}

type DurationInfo {
    duration: Int!
    durationTimeInfo: DateTimeInfo
}

type DateTimeInfo {
    startDate: Date!
    endDate: Date!
}

type StatisticsInfo {
    status: Status
    userCompletionInfo: UserCompletionInfo
    totals: TotalUsersInfo
}

type UserCompletionInfo {
    percentageCompleted: Float
    percentageNotCompleted: Float
    absoluteCompleted: Int
    absoluteNotCompleted: Int
}

type TotalUsersInfo {
    totalUsersEntered: Float
    totalUsersEarlyExited: Float
    totalUsersCompleted: Float
}

type CohortFlowStats {
    flowType: FlowType
    projectID: ID!
    cohortID: ID!
    stageID: ID!
    durationInfo: DurationInfo
    statisticsInfo: StatisticsInfo
    stageInfos: [StageInfo!]
}

type StageInfo {
    projectInfo: ProjectInfo
    cohortInfo: CohortInfo
    stageID: ID!
}

type CohortStageStats {
    cohortInfo: CohortInfo
    durationInfo: DurationInfo
    overallStatus: OverallStatusInfo
    goalInfo: GoalInfo
    statisticsInfo: StatisticsInfo
    userStageInfos: [UserStageInfo]
}

type CohortInfo {
    projectInfo: ProjectInfo
    cohortID: ID!
    numberOfUsers: Int
}

type OverallStatusInfo {
    cohortInfo: CohortInfo
    durationInfo: DurationInfo
    statisticsInfo: StatisticsInfo
    userStageInfos: [UserStageInfo]
}

type GoalInfo {
    goals: Goals
    goalNumericalType: GoalNumericalType
    target: Target
}

type GoalNumericalType {
    percentage: Float
    absolute: Int
}

type Target {
    targetInfoAbsolute: TargetInfoAbsolute
    targetInfoPercentage: TargetInfoPercentage
}

type TargetInfoAbsolute {
    goalAbsolute: Int
    targetDate: Date
}

type TargetInfoPercentage {
    goalPercentageCompleted: Float
    targetDate: Date
}

type ProjectInfo {
    projectID: ID!
}

type UsersStageInfo {
    cohortInfo: CohortInfo
    durationInfo: DurationInfo    
    statisticsInfo: StatisticsInfo
    userStageInfo: [UserStageInfo]
}

type UserStageInfo {
    stageInfo: StageInfo
    duration: DurationInfo
    goalInfo: GoalInfo
    viewInfo: [ViewInfo]
}

type ViewInfo {
    view: View
    visits: [VisitsInfo]
    overallDuration: DateTimeInfo
    goalInfo: GoalInfo
}

type VisitsInfo {
    componentInfos: [ComponentInfo]
    duration: DateTimeInfo
}

type ComponentInfo {
    view: View
    componentID: ID
    duration: DateTimeInfo
    componentType: ComponentType
    action: String
    nextView: View
}

type CohortFlowSummary {
	softwareRelease: String!
	cohortID: ID!
	durationInfo: DurationInfo
	numberOfUsers: Int!
	status: Status
	graphs: [Graph]
	dashboard: [Dashboard]
	ghStageStatus: 
}

#Entrypoints (query type)
type Query {
    getProjectFlowStageStats(projectID: ID!): ProjectFlowStageStats
    getCohortFlowStats(projectID: ID!, cohortID: ID!, stageID: ID!): CohortFlowStats
    getCohortStageStats(cohortID: ID!): CohortStageStats
    getUserStageInfos(cohortID: ID!): UsersStageInfo
    getComponentInfo(componentID: ID!): ComponentInfo
}


enum ComponentType {
    BUTTON
    LINK
    RADIO_BUTTON
    TEXT
    IMAGE
    VIDEO
    FORM
    INPUT
    DROPDOWN
    CHECKBOX
    SLIDER
    DATE_PICKER
    TIME_PICKER
    MAP
    CHART
    TABLE
    LIST
    CAROUSEL
    MODAL
    TOOLTIP
    POPUP
    NOTIFICATION
    LOADING
    NAVIGATION
    SEARCH
    FILTER
    PAGINATION
    SORT
    PROFILE
    SETTINGS
    HELP
    FAQ
    SUPPORT
    CONTACT
    ABOUT
    TERMS
    PRIVACY
    POLICY
}

enum Status {
    PASS
    FAIL
    IN_PROGRESS
    CANCELLED
}

enum FlowType {
    PRODUCT_MAGIC
    BETA_USERS
    LANDING_PAGE_CONVERSION_RATE
    AFTER_RELEASE_100_USERS
    USERS_100
    PEOPLE_INVITED_100
    PEOPLE_ACCEPT_INVITATIONS_100
}

enum Goals {
    CONVERSION_RATE_50
    CONVERSION_RATE_60
    CONVERSION_RATE_70
    CONVERSION_RATE_80
    BOUNCE_RATE_10
    BOUNCE_RATE_5
    BOUNCE_RATE_1
    CUSTOMER_ACQUISITION_COST_MARKETING
    CUSTOMER_ACQUISITION_COST_SALES
    CHANNEL_EFFECTIVENESS_DRIVE_TRAFFIC
    CHANNEL_EFFECTIVENESS_SIGNUPS
    CHANNEL_EFFECTIVENESS_PURCHASES
}

enum View {
    SCREEN_NAME
    WEB_PAGE
}

enum StageType {
    CONVERSION_RATE
    INVITATION
    SOCIAL_MEDIA_POST
    ADVERTISEMENT
    LANDING_PAGE
    JTBD
    INTERVIEW
    NOMINAL_PAID_ACQUISITION
    SIGNUP
    LOGIN
    D7
    D30
    VIRAL_REFERRAL_RATE
    ENGAGEMENT
    MONETIZATION
}
`;
