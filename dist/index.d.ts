import * as TodoistV9Types from './v9-types';
export declare const Todoist: {
    (token: string, userOptions?: {
        endpoint: string;
        resourceTypes: string[];
        autocommit: boolean;
    }): {
        activityLog: {
            get: (options: any) => Promise<{
                sync_status: Record<string, string & {
                    error_tag: string;
                    error: string;
                }>;
                temp_id_mapping: Record<string, string>;
                sync_token: string;
                full_sync: boolean;
            } & import("./v9").State>;
        };
        backup: {};
        business: {};
        colorsById: Record<TodoistV9Types.ColorId, string>;
        commit: () => void;
        email: {};
        filters: {
            get: () => TodoistV9Types.Filter[];
            add: (args: TodoistV9Types.FilterAdd) => Promise<TodoistV9Types.NodeType | undefined>;
            update: (args: TodoistV9Types.FilterUpdate) => Promise<TodoistV9Types.NodeType | undefined>;
            delete: (args: TodoistV9Types.FilterDelete) => Promise<TodoistV9Types.NodeType | undefined>;
            updateOrders: (args: TodoistV9Types.FilterUpdateOrders) => Promise<TodoistV9Types.NodeType | undefined>;
        };
        items: {
            get: () => TodoistV9Types.Item[];
            add: (args: TodoistV9Types.ItemAdd) => Promise<TodoistV9Types.NodeType | undefined>;
            update: (args: TodoistV9Types.ItemUpdate) => Promise<TodoistV9Types.NodeType | undefined>;
            move: (args: TodoistV9Types.ItemMove) => Promise<TodoistV9Types.NodeType | undefined>;
            reorder: (args: TodoistV9Types.ItemReorder) => Promise<TodoistV9Types.NodeType | undefined>;
            delete: (args: TodoistV9Types.ItemDelete) => Promise<TodoistV9Types.NodeType | undefined>;
            close: (args: TodoistV9Types.ItemClose) => Promise<TodoistV9Types.NodeType | undefined>;
            complete: (args: TodoistV9Types.ItemComplete) => Promise<TodoistV9Types.NodeType | undefined>;
            uncomplete: (args: TodoistV9Types.ItemUncomplete) => Promise<TodoistV9Types.NodeType | undefined>;
            archive: (args: TodoistV9Types.ItemArchive) => Promise<TodoistV9Types.NodeType | undefined>;
            unarchive: (args: TodoistV9Types.ItemUnarchive) => Promise<TodoistV9Types.NodeType | undefined>;
            updateDayOrders: (args: TodoistV9Types.ItemUpdateDayOrders) => Promise<TodoistV9Types.NodeType | undefined>;
            updateDateCompleted: (args: TodoistV9Types.ItemUpdateDateComplete) => Promise<TodoistV9Types.NodeType | undefined>;
        };
        labels: {
            get: () => TodoistV9Types.Label[];
            add: (args: TodoistV9Types.LabelAdd) => Promise<TodoistV9Types.NodeType | undefined>;
            update: (args: TodoistV9Types.LabelUpdate) => Promise<TodoistV9Types.NodeType | undefined>;
            delete: (args: TodoistV9Types.LabelDelete) => Promise<TodoistV9Types.NodeType | undefined>;
            deleteOccurrences: (args: TodoistV9Types.LabelDeleteOccurrences) => Promise<TodoistV9Types.NodeType | undefined>;
            rename: (args: TodoistV9Types.LabelRename) => Promise<TodoistV9Types.NodeType | undefined>;
            updateOrders: (args: TodoistV9Types.LabelUpdateOrders) => Promise<TodoistV9Types.NodeType | undefined>;
        };
        liveNotifications: {
            setLastRead: (args: any) => Promise<TodoistV9Types.NodeType | undefined>;
            markAsRead: (args: any) => Promise<TodoistV9Types.NodeType | undefined>;
            markAllAsRead: (args: any) => Promise<TodoistV9Types.NodeType | undefined>;
            markAsUnread: (args: any) => Promise<TodoistV9Types.NodeType | undefined>;
        };
        notes: {
            get: () => TodoistV9Types.Note[];
            add: (args: TodoistV9Types.NoteAdd) => Promise<TodoistV9Types.NodeType | undefined>;
            update: (args: TodoistV9Types.NoteUpdate) => Promise<TodoistV9Types.NodeType | undefined>;
            delete: (args: TodoistV9Types.NoteDelete) => Promise<TodoistV9Types.NodeType | undefined>;
        };
        projects: {
            get: () => TodoistV9Types.Project[];
            add: (args: TodoistV9Types.ProjectAdd) => Promise<TodoistV9Types.NodeType | undefined>;
            update: (args: TodoistV9Types.ProjectUpdate) => Promise<TodoistV9Types.NodeType | undefined>;
            move: (args: TodoistV9Types.ProjectMove) => Promise<TodoistV9Types.NodeType | undefined>;
            delete: (args: TodoistV9Types.ProjectDelete) => Promise<TodoistV9Types.NodeType | undefined>;
            archive: (args: TodoistV9Types.ProjectArchive) => Promise<TodoistV9Types.NodeType | undefined>;
            unarchive: (args: TodoistV9Types.ProjectUnarchive) => Promise<TodoistV9Types.NodeType | undefined>;
            reorder: (args: TodoistV9Types.ProjectReorder) => Promise<TodoistV9Types.NodeType | undefined>;
        };
        projectNotes: {
            get: () => TodoistV9Types.ProjectNote[];
            add: (args: TodoistV9Types.ProjectNoteAdd) => Promise<TodoistV9Types.NodeType | undefined>;
            update: (args: TodoistV9Types.ProjectNoteUpdate) => Promise<TodoistV9Types.NodeType | undefined>;
            delete: (args: TodoistV9Types.ProjectNoteDelete) => Promise<TodoistV9Types.NodeType | undefined>;
        };
        reminders: {
            get: () => TodoistV9Types.Reminder[];
            add: (args: TodoistV9Types.ReminderAdd) => Promise<TodoistV9Types.NodeType | undefined>;
            update: (args: TodoistV9Types.ReminderUpdate) => Promise<TodoistV9Types.NodeType | undefined>;
            delete: (args: TodoistV9Types.ReminderDelete) => Promise<TodoistV9Types.NodeType | undefined>;
            clearLocations: (args: TodoistV9Types.ReminderClearLocations) => Promise<TodoistV9Types.NodeType | undefined>;
        };
        sections: {
            get: () => TodoistV9Types.Section[];
            add: (args: TodoistV9Types.SectionAdd) => Promise<TodoistV9Types.NodeType | undefined>;
            update: (args: TodoistV9Types.SectionUpdate) => Promise<TodoistV9Types.NodeType | undefined>;
            move: (args: TodoistV9Types.SectionMove) => Promise<TodoistV9Types.NodeType | undefined>;
            reorder: (args: TodoistV9Types.SectionReorder) => Promise<TodoistV9Types.NodeType | undefined>;
            delete: (args: TodoistV9Types.SectionDelete) => Promise<TodoistV9Types.NodeType | undefined>;
            archive: (args: TodoistV9Types.SectionArchive) => Promise<TodoistV9Types.NodeType | undefined>;
            unarchive: (args: TodoistV9Types.SectionUnarchive) => Promise<TodoistV9Types.NodeType | undefined>;
        };
        settings: {
            get: () => TodoistV9Types.UserSettings | null;
            update: (args: TodoistV9Types.UserSettingsUpdate) => Promise<TodoistV9Types.NodeType | undefined>;
        };
        sharing: {
            collaborators: () => TodoistV9Types.Collaborator[];
            shareProject: (args: any) => Promise<TodoistV9Types.NodeType | undefined>;
            deleteCollaborator: (args: any) => Promise<TodoistV9Types.NodeType | undefined>;
            acceptInvitation: (args: any) => Promise<TodoistV9Types.NodeType | undefined>;
            rejectInvitation: (args: any) => Promise<TodoistV9Types.NodeType | undefined>;
            deleteInvitation: (args: any) => Promise<TodoistV9Types.NodeType | undefined>;
        };
        state: import("./v9").State;
        sync: (resourceTypes?: string[]) => Promise<void>;
        user: {
            get: () => TodoistV9Types.User | null;
            update: (args: TodoistV9Types.UserUpdate) => Promise<TodoistV9Types.NodeType | undefined>;
            updateGoals: (args: TodoistV9Types.UserUpdateGoals) => Promise<TodoistV9Types.NodeType | undefined>;
        };
        syncToken: {
            get: () => string;
            set: (newToken: string) => void;
        };
    };
    colorsById: Record<TodoistV9Types.ColorId, string>;
    getColor(id: TodoistV9Types.ColorId): string;
};
export declare const v9: {
    (token: string, userOptions?: {
        endpoint: string;
        resourceTypes: string[];
        autocommit: boolean;
    }): {
        activityLog: {
            get: (options: any) => Promise<{
                sync_status: Record<string, string & {
                    error_tag: string;
                    error: string;
                }>;
                temp_id_mapping: Record<string, string>;
                sync_token: string;
                full_sync: boolean;
            } & import("./v9").State>;
        };
        backup: {};
        business: {};
        colorsById: Record<TodoistV9Types.ColorId, string>;
        commit: () => void;
        email: {};
        filters: {
            get: () => TodoistV9Types.Filter[];
            add: (args: TodoistV9Types.FilterAdd) => Promise<TodoistV9Types.NodeType | undefined>;
            update: (args: TodoistV9Types.FilterUpdate) => Promise<TodoistV9Types.NodeType | undefined>;
            delete: (args: TodoistV9Types.FilterDelete) => Promise<TodoistV9Types.NodeType | undefined>;
            updateOrders: (args: TodoistV9Types.FilterUpdateOrders) => Promise<TodoistV9Types.NodeType | undefined>;
        };
        items: {
            get: () => TodoistV9Types.Item[];
            add: (args: TodoistV9Types.ItemAdd) => Promise<TodoistV9Types.NodeType | undefined>;
            update: (args: TodoistV9Types.ItemUpdate) => Promise<TodoistV9Types.NodeType | undefined>;
            move: (args: TodoistV9Types.ItemMove) => Promise<TodoistV9Types.NodeType | undefined>;
            reorder: (args: TodoistV9Types.ItemReorder) => Promise<TodoistV9Types.NodeType | undefined>;
            delete: (args: TodoistV9Types.ItemDelete) => Promise<TodoistV9Types.NodeType | undefined>;
            close: (args: TodoistV9Types.ItemClose) => Promise<TodoistV9Types.NodeType | undefined>;
            complete: (args: TodoistV9Types.ItemComplete) => Promise<TodoistV9Types.NodeType | undefined>;
            uncomplete: (args: TodoistV9Types.ItemUncomplete) => Promise<TodoistV9Types.NodeType | undefined>;
            archive: (args: TodoistV9Types.ItemArchive) => Promise<TodoistV9Types.NodeType | undefined>;
            unarchive: (args: TodoistV9Types.ItemUnarchive) => Promise<TodoistV9Types.NodeType | undefined>;
            updateDayOrders: (args: TodoistV9Types.ItemUpdateDayOrders) => Promise<TodoistV9Types.NodeType | undefined>;
            updateDateCompleted: (args: TodoistV9Types.ItemUpdateDateComplete) => Promise<TodoistV9Types.NodeType | undefined>;
        };
        labels: {
            get: () => TodoistV9Types.Label[];
            add: (args: TodoistV9Types.LabelAdd) => Promise<TodoistV9Types.NodeType | undefined>;
            update: (args: TodoistV9Types.LabelUpdate) => Promise<TodoistV9Types.NodeType | undefined>;
            delete: (args: TodoistV9Types.LabelDelete) => Promise<TodoistV9Types.NodeType | undefined>;
            deleteOccurrences: (args: TodoistV9Types.LabelDeleteOccurrences) => Promise<TodoistV9Types.NodeType | undefined>;
            rename: (args: TodoistV9Types.LabelRename) => Promise<TodoistV9Types.NodeType | undefined>;
            updateOrders: (args: TodoistV9Types.LabelUpdateOrders) => Promise<TodoistV9Types.NodeType | undefined>;
        };
        liveNotifications: {
            setLastRead: (args: any) => Promise<TodoistV9Types.NodeType | undefined>;
            markAsRead: (args: any) => Promise<TodoistV9Types.NodeType | undefined>;
            markAllAsRead: (args: any) => Promise<TodoistV9Types.NodeType | undefined>;
            markAsUnread: (args: any) => Promise<TodoistV9Types.NodeType | undefined>;
        };
        notes: {
            get: () => TodoistV9Types.Note[];
            add: (args: TodoistV9Types.NoteAdd) => Promise<TodoistV9Types.NodeType | undefined>;
            update: (args: TodoistV9Types.NoteUpdate) => Promise<TodoistV9Types.NodeType | undefined>;
            delete: (args: TodoistV9Types.NoteDelete) => Promise<TodoistV9Types.NodeType | undefined>;
        };
        projects: {
            get: () => TodoistV9Types.Project[];
            add: (args: TodoistV9Types.ProjectAdd) => Promise<TodoistV9Types.NodeType | undefined>;
            update: (args: TodoistV9Types.ProjectUpdate) => Promise<TodoistV9Types.NodeType | undefined>;
            move: (args: TodoistV9Types.ProjectMove) => Promise<TodoistV9Types.NodeType | undefined>;
            delete: (args: TodoistV9Types.ProjectDelete) => Promise<TodoistV9Types.NodeType | undefined>;
            archive: (args: TodoistV9Types.ProjectArchive) => Promise<TodoistV9Types.NodeType | undefined>;
            unarchive: (args: TodoistV9Types.ProjectUnarchive) => Promise<TodoistV9Types.NodeType | undefined>;
            reorder: (args: TodoistV9Types.ProjectReorder) => Promise<TodoistV9Types.NodeType | undefined>;
        };
        projectNotes: {
            get: () => TodoistV9Types.ProjectNote[];
            add: (args: TodoistV9Types.ProjectNoteAdd) => Promise<TodoistV9Types.NodeType | undefined>;
            update: (args: TodoistV9Types.ProjectNoteUpdate) => Promise<TodoistV9Types.NodeType | undefined>;
            delete: (args: TodoistV9Types.ProjectNoteDelete) => Promise<TodoistV9Types.NodeType | undefined>;
        };
        reminders: {
            get: () => TodoistV9Types.Reminder[];
            add: (args: TodoistV9Types.ReminderAdd) => Promise<TodoistV9Types.NodeType | undefined>;
            update: (args: TodoistV9Types.ReminderUpdate) => Promise<TodoistV9Types.NodeType | undefined>;
            delete: (args: TodoistV9Types.ReminderDelete) => Promise<TodoistV9Types.NodeType | undefined>;
            clearLocations: (args: TodoistV9Types.ReminderClearLocations) => Promise<TodoistV9Types.NodeType | undefined>;
        };
        sections: {
            get: () => TodoistV9Types.Section[];
            add: (args: TodoistV9Types.SectionAdd) => Promise<TodoistV9Types.NodeType | undefined>;
            update: (args: TodoistV9Types.SectionUpdate) => Promise<TodoistV9Types.NodeType | undefined>;
            move: (args: TodoistV9Types.SectionMove) => Promise<TodoistV9Types.NodeType | undefined>;
            reorder: (args: TodoistV9Types.SectionReorder) => Promise<TodoistV9Types.NodeType | undefined>;
            delete: (args: TodoistV9Types.SectionDelete) => Promise<TodoistV9Types.NodeType | undefined>;
            archive: (args: TodoistV9Types.SectionArchive) => Promise<TodoistV9Types.NodeType | undefined>;
            unarchive: (args: TodoistV9Types.SectionUnarchive) => Promise<TodoistV9Types.NodeType | undefined>;
        };
        settings: {
            get: () => TodoistV9Types.UserSettings | null;
            update: (args: TodoistV9Types.UserSettingsUpdate) => Promise<TodoistV9Types.NodeType | undefined>;
        };
        sharing: {
            collaborators: () => TodoistV9Types.Collaborator[];
            shareProject: (args: any) => Promise<TodoistV9Types.NodeType | undefined>;
            deleteCollaborator: (args: any) => Promise<TodoistV9Types.NodeType | undefined>;
            acceptInvitation: (args: any) => Promise<TodoistV9Types.NodeType | undefined>;
            rejectInvitation: (args: any) => Promise<TodoistV9Types.NodeType | undefined>;
            deleteInvitation: (args: any) => Promise<TodoistV9Types.NodeType | undefined>;
        };
        state: import("./v9").State;
        sync: (resourceTypes?: string[]) => Promise<void>;
        user: {
            get: () => TodoistV9Types.User | null;
            update: (args: TodoistV9Types.UserUpdate) => Promise<TodoistV9Types.NodeType | undefined>;
            updateGoals: (args: TodoistV9Types.UserUpdateGoals) => Promise<TodoistV9Types.NodeType | undefined>;
        };
        syncToken: {
            get: () => string;
            set: (newToken: string) => void;
        };
    };
    colorsById: Record<TodoistV9Types.ColorId, string>;
    getColor(id: TodoistV9Types.ColorId): string;
};
export { TodoistV9Types };
