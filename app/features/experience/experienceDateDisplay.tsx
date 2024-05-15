import { DateTime, type DurationObjectUnits } from 'luxon';
import { useTimeSince } from './useTimeSince';

interface DateDisplayProps {
    startDate: Date;
    endDate?: Date;
}

export const ExperienceDateDisplay = ({
    startDate,
    endDate,
}: DateDisplayProps) => {
    const timeSinceStart = useTimeSince(startDate);

    if (endDate) {
        const duration = DateTime.fromJSDate(endDate).diff(
            DateTime.fromJSDate(startDate),
            ['years', 'months', 'weeks'],
        );

        const biggestUnit =
            (Object.keys(duration.toObject()).find(
                (key) =>
                    (duration.toObject()[key as keyof DurationObjectUnits] ??
                        0) > 0,
            ) as keyof DurationObjectUnits) ?? ('months' as const);

        const formattedDuration = duration.shiftTo(biggestUnit).toHuman({
            maximumFractionDigits: 0,
            unit: biggestUnit,
        });

        if (startDate.getFullYear() === endDate.getFullYear()) {
            return (
                <>
                    {startDate.getFullYear()} ({formattedDuration})
                </>
            );
        }

        return (
            <>
                {startDate.getFullYear()} - {endDate.getFullYear()} (
                {formattedDuration})
            </>
        );
    }

    return (
        <>
            {startDate.getFullYear()} - now ({timeSinceStart})
        </>
    );
};
