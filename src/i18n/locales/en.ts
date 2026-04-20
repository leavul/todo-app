const en = {
    translation: {
        settings: {
            title: 'Settings',
        },
        tasks: {
            title: 'Tasks',
            empty: 'There are no tasks',
            empty_hint: 'Add one to get started 🚀',
            add_title: 'New Task',
            add_placeholder: 'Add a new task',
            edit_title: 'Edit Task',
        },
        form: {
            cannot_be_empty: 'Cannot be empty',
            cancel: 'Cancel',
            save: 'Save',
        },
        layout: {
            title: 'Layout',
            description: 'Choose how tasks are displayed.',
            preview_task: 'Rate Doit',
            numbering: 'Numbering',
            numbering_description: 'Show a number next to each task to track their order.',
            numbering_none: 'None',
            numbering_numbered: 'Numbered',
            columns: 'Columns',
            columns_description: 'Choose how many columns tasks are displayed in.',
            columns_one_label: '1 Column',
            columns_two_label: '2 Columns',
        },
        danger: {
            title: 'Danger Zone',
            description: 'These actions remove tasks and cannot be undone.',
            clear_completed: 'Clear Completed Tasks',
            clear_completed_empty: 'No completed tasks to remove',
            clear_completed_hint_one: '{{count}} completed task ready to clear',
            clear_completed_hint_other: '{{count}} completed tasks ready to clear',
            clear_modal_title: 'Clear Completed Tasks?',
            clear_modal_message_one: 'This will remove {{count}} completed task.',
            clear_modal_message_other: 'This will remove {{count}} completed tasks.',
            clear_confirm: 'Clear',
            delete_all: 'Delete All Tasks',
            delete_all_empty: 'No tasks to delete',
            delete_all_hint_one: '{{count}} task will be removed',
            delete_all_hint_other: '{{count}} tasks will be removed',
            delete_all_modal_title: 'Delete All Tasks?',
            delete_all_modal_message_one: 'This will permanently remove {{count}} task.',
            delete_all_modal_message_other: 'This will permanently remove {{count}} tasks.',
            delete_all_confirm: 'Delete All',
        },
    },
}

export default en;
export type Translations = typeof en;
