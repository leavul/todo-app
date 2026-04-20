import { Translations } from './en';

const ar: { translation: Translations['translation'] } = {
    translation: {
        settings: {
            title: 'الإعدادات',
        },
        tasks: {
            title: 'المهام',
            empty: 'لا توجد مهام',
            empty_hint: 'أضف مهمة للبدء 🚀',
            add_title: 'مهمة جديدة',
            add_placeholder: 'أضف مهمة جديدة',
            edit_title: 'تعديل المهمة',
        },
        form: {
            cannot_be_empty: 'لا يمكن أن يكون فارغاً',
            cancel: 'إلغاء',
            save: 'حفظ',
        },
        layout: {
            title: 'التخطيط',
            description: 'اختر كيفية عرض المهام.',
            preview_task: 'قيم Doit',
            numbering: 'الترقيم',
            numbering_description: 'اعرض رقماً بجانب كل مهمة لتتبع ترتيبها.',
            numbering_none: 'بدون',
            numbering_numbered: 'مرقم',
            columns: 'الأعمدة',
            columns_description: 'اختر عدد الأعمدة لعرض المهام.',
            columns_one_label: 'عمود واحد',
            columns_two_label: 'عمودان',
        },
        danger: {
            title: 'المنطقة الخطرة',
            description: 'هذه الإجراءات تحذف المهام ولا يمكن التراجع عنها.',
            clear_completed: 'مسح المهام المكتملة',
            clear_completed_empty: 'لا توجد مهام مكتملة للإزالة',
            clear_completed_hint_one: 'مهمة مكتملة واحدة جاهزة للمسح',
            clear_completed_hint_other: '{{count}} مهام مكتملة جاهزة للمسح',
            clear_modal_title: 'مسح المهام المكتملة؟',
            clear_modal_message_one: 'سيتم حذف مهمة مكتملة واحدة.',
            clear_modal_message_other: 'سيتم حذف {{count}} مهام مكتملة.',
            clear_confirm: 'مسح',
            delete_all: 'حذف جميع المهام',
            delete_all_empty: 'لا توجد مهام للحذف',
            delete_all_hint_one: 'سيتم حذف مهمة واحدة',
            delete_all_hint_other: 'سيتم حذف {{count}} مهام',
            delete_all_modal_title: 'حذف جميع المهام؟',
            delete_all_modal_message_one: 'سيتم حذف مهمة واحدة نهائياً.',
            delete_all_modal_message_other: 'سيتم حذف {{count}} مهام نهائياً.',
            delete_all_confirm: 'حذف الكل',
        },
    },
}

export default ar;
