import menu from './menu'
import user from './page/user'
import contacts from './page/contacts'
import routes from './routes'
import lang from '../langs'

export default {
    "moment-locale": "ru",
    lang,
    menu,
    page: {
        user,
        contacts
    },
    "breadcrumb": {
        "tutorial": "Инструкция",
        routes
    },
    "Daily stat": "Дневной охват",
    "country": "Страна",
    "average salary": "Средний доход",
    "cpu": "Процессор",
    "mem": "Память(ОЗУ)",
    "hdd": "Жесткий диск",
    "uptime": "Время работы",
    "visits": "Визиты с других ресурсов",
    "from": "от",
    "clients": "Клиенты",
    "exchanges": "Обмены",
    "online": "Онлайн",
    "lastupd": "Последнее обновление",
    "date": "Дата",
    "percent": "процент",
    "free": "Свободно",
    "hours": "час.",
    "minutes": "мин.",
    "app": "Приложение",
    "system": "Система",
    "good": "Хорошо",
    "active": "Активно",
    "nactive": "Не активно",
    "rates": "Направлений",
    "salary": "Доход",
    "entries": "Посещения",
    "users": "Пользователи",
    "user": "Пользователь",
    "link": "Ссылка",
    "created": "Создано",
    "nick": "Псевдоним",
    "action": "Действие",
    "contacts": "Контакты",
    "add": "Добавить",
    "cancel": "Отмена",
    "save": "Сохранить",
    "clear": "Очистить",
    "send": "Отправить",
    "delete": "Удалить",
    "edit": "Редактировать",
    "close": "Закрыть",
    "create": "Создать",
    "create group": "Создать группу",
    "search": "Искать",
    "operation": "Операция",
    "currency": "Валюта",
    "unknown": "Неизвестно",
    "exchange": "Обмен",
    "trans": "Перевод",
    "all": "Все",
    "news": "Новости",
    "currencies": "Валюты",
    "settings": "Настройки",
    "reviews": "Рецензии",
    "rules": "Правила",
    "rule": "Правило",
    "parsers": "Парсеры",
    "routes": "Направления",
    "logout": "Выход",
    "navigation": "Навигация",
    "dash": "Дом",
    "partners": "Партнёры",
    "parser": "Парсер",
    "admins": "Администраторы",
    "history": "История",
    "design": "Внешний вид",
    "see": "Смотреть",
    "notification": "Уведомление",
    "notifications": "Уведомления",
    "profile": "Профиль",
    "account": "Аккаунт",
    "my": "Мой",
    "balance": "Баланс",
    "view": "Смотреть",
    "youhave": "У вас",
    "email": "Эл. почта",
    "state": "Состояние",
    "choose": "Выберите",
    "choise": "Выбор",
    "title": "Заголовок",
    "upload": "Загрузить",
    "logo": "Логотип",
    "to": "До",
    "accept": "Принять",
    "return": "Вернуть",
    "fn": "Имя",
    "ln": "Фамилия",
    "photo": "Фото",
    "wait": "Ожидание",
    "verif": "Верификации",
    "current": "Текущее",
    "comission": "Комиссия",
    "total": "Всего",
    "sum": "Сумма",
    "type": "Тип",
    "paysystem": "Платежная система",
    "reserve": "Резерв",
    "manual": "В ручную",
    "auto": "Автоматически",
    "deposit": "Депозит",
    "field": "Поле",
    "validator": "Валидатор",
    "your": "Ваш",
    "bill": "счёт",
    "on": "На",
    "pay": "Оплатите",
    "comment": "Комментарий",
    "auth": "Авторизация",
    "finish": "Завершение",
    "input": "Введите",
    "tag": "Обозначение",
    "course": "Курс",
    "attention": "Внимание",
    "thiss": "это",
    "need": "Необходимо",
    "correct": "Корректировать",
    "code": "Код",
    "pays": "Оплаты",
    "for": "для",
    "out": "Вывод",
    "merch": "Мерчант",
    "min": "Мин.",
    "max": "Maкс.",
    "switch": "Переключить",
    "exAmoutn": "Сумма обмена",
    "pass": "Пароль",
    "img": "Изображение",
    "name": "Имя",
    "createCurrency": {
        "standard": "Введите обозначение (согласно стандарту)",
        "amount": "Сумма резерва",
        "accuracy": "Точность суммы",
        "rate": "Курс валюты ",
        "exRate": "Введите курс валюты",
        "attention": "Внимание данное поле необходимо корректировать для того чтоб партнерские вознаграждения начислялись верно.",
        "code": "Код валюты (Пример: EUR)",
        "parsersList": "C полным списком парсеров и доступных им направлений вы можете увидеть в розделе",
        "payMethod": "Способ оплаты",
        "depField": "Название поля для депозита",
        "depValid": "Валидатор для поля депозита",
        "outField": "Название поля для вывода",
        "outValid": "Валидатор для поля вывода",
        "linkPaySys": "Ссылка платежной системы",
        "acc": "Ваш счет",
        "manual": "Инструкция ручной оплаты",
        "steps": "Для завершение обмена необходимо выполнить следушие действия:",
        "login": "Авторизируйтесь в:",
        "pay": "Оплатите:",
        "target": "На счет:",
        "attention2": "Внимание если вы не видите в списке нужно мерчанта возможно он не настроен в меню"

    },
    "createRoute": {
        "payInfo": "Информация на шаге оплаты",
        "acceptInfo": "Информация на шаге подтверждения",
        "verifInfo": "Инструкция по верификации"
    },

    "createNews": {
        "success": "Успешно опубликовано ",
        "more": "Создать еще одну новость",
        "create": "Создание новости",
        "info": "Инфо текст новстей",
        "img": "Изображение новости",
        "upload": "Загрузить фото",
        "title": "Заголовок новости",
        "text": "Текст новости"
    }
}
