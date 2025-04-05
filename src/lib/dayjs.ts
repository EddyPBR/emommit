import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import "dayjs/locale/pt-br";
import duration from "dayjs/plugin/duration";
import timezone from "dayjs/plugin/timezone";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";

// Plugins
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(duration);
dayjs.extend(relativeTime);

// Locale
dayjs.locale("pt-br");

// Mantém o dayjs original com suporte a timezone
dayjs.tz.setDefault("America/Sao_Paulo");

export { dayjs };
export type { Dayjs };
